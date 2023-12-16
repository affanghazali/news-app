import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

interface NewsListProps {
  language: string;
  selectedTopic: string;
}

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const formatDate = (date: Date): string => {
  const fromDate = new Date(date);
  fromDate.setDate(fromDate.getDate() - 7);
  return fromDate.toISOString().split("T")[0];
};

const LoadingComponent: React.FC = () => (
  <CircularProgress
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  />
);

const ErrorComponent: React.FC<{ error: string }> = ({ error }) => (
  <Typography
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
    color="error"
  >
    {error}
  </Typography>
);

const ArticlesComponent: React.FC<{ articles: Article[] }> = ({ articles }) => (
  <>
    {articles.map((article, index) => (
      <Card key={index} style={{ marginBottom: "20px" }}>
        <CardActionArea
          component="a"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardMedia
            component="img"
            height="140"
            image={article.urlToImage}
            alt={article.title}
            onError={(e) => {
              e.currentTarget.src = "public/assets/image-not-found.jpg";
            }}
          />
          <CardContent>
            <Typography variant="h6">{article.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {article.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ))}
  </>
);

const NewsList: React.FC<NewsListProps> = ({ language, selectedTopic }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: selectedTopic,
            from: formatDate(new Date()),
            sortBy: "publishedAt",
            language,
          },
          headers: {
            "X-Api-Key": API_KEY,
          },
        });

        setArticles(response.data.articles);
      } catch (error) {
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language, selectedTopic]);

  return (
    <>
      {loading && <LoadingComponent />}
      {!loading && !error && <ArticlesComponent articles={articles} />}
      {error && <ErrorComponent error={error} />}
    </>
  );
};

export default NewsList;
