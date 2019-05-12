import React from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

function Posts(props) {
  const { posts } = props;
  if (!posts) {
    return <div> </div>;
  }
  return (
    <div
      style={{
        marginTop: 20,
        padding: 30,
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%"
      }}
    >
      <Grid container spacing={40} justify="center">
        {posts.map(post => (
          <Grid item key={post.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={post.title}
                  height="140"
                  image={post.cover}
                  title={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.text}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export const mapStateToProps = ({ posts: { posts } }) => ({
  posts
});

export default connect(mapStateToProps)(Posts);
