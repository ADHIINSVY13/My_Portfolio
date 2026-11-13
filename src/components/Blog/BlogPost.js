import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, Navigate, useParams } from "react-router-dom";
import Particle from "../Particle";
import localPosts from "./posts";
import { fetchDevtoPost } from "./devto";

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Shell({ children }) {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="blog-post">
        <Link to="/blog" className="blog-back">
          ← Back to blog
        </Link>
        {children}
      </Container>
    </Container>
  );
}

function RemotePost({ id }) {
  const [post, setPost] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    fetchDevtoPost(id)
      .then((p) => alive && setPost(p))
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, [id]);

  if (failed) return <Navigate to="/blog" />;
  if (!post) {
    return (
      <Shell>
        <p style={{ color: "white", marginTop: "30px" }}>Loading post...</p>
      </Shell>
    );
  }
  return (
    <Shell>
      <h1 className="project-heading" style={{ textAlign: "left" }}>
        {post.title}
      </h1>
      <p className="blog-meta">{formatDate(post.date)}</p>
      <div
        className="blog-html"
        // content comes from my own Dev.to account
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Shell>
  );
}

function BlogPost() {
  const { slug } = useParams();

  if (slug.startsWith("d-")) return <RemotePost id={slug.slice(2)} />;

  const post = localPosts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" />;

  return (
    <Shell>
      <h1 className="project-heading" style={{ textAlign: "left" }}>
        {post.title}
      </h1>
      <p className="blog-meta">{formatDate(post.date)}</p>
      <div>
        {post.content.map((para, i) => (
          <p key={i} className="blog-body">
            {para}
          </p>
        ))}
      </div>
    </Shell>
  );
}

export default BlogPost;
