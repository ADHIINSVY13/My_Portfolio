import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import localPosts from "./posts";
import { fetchDevtoPosts } from "./devto";

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Blog() {
  const [remote, setRemote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetchDevtoPosts()
      .then((p) => alive && setRemote(p))
      .catch(() => {})
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  const posts = [...remote, ...localPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Blog</strong>
        </h1>
        <p style={{ color: "white" }}>
          Thoughts, notes and things I'm learning.
        </p>
        {loading && <p style={{ color: "white" }}>Loading latest posts...</p>}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {posts.map((post) => (
            <Col md={6} lg={4} className="project-card" key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="blog-card-link">
                <div className="project-card-view blog-card">
                  {post.cover && (
                    <img
                      src={post.cover}
                      alt=""
                      className="blog-cover"
                      loading="lazy"
                    />
                  )}
                  <p className="blog-meta">{formatDate(post.date)}</p>
                  <h4>{post.title}</h4>
                  <p className="blog-summary">{post.summary}</p>
                  <div>
                    {post.tags.map((tag) => (
                      <span className="blog-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
