"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { button, div, iframe } from "framer-motion/client";
import { useEffect, useState } from "react";

// Define a type for the posts
interface Post {
  id: number;
  title: string;
  body: string;
}

export default function GetPost() {
    const [posts, setPosts] = useState<Post[]>([]); // Specify the type as an array of Post
    const [start, setStart] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);
    console.log(posts)
    // Ensure there are posts to render and handle pagination using slice
    const visiblePosts = posts.slice(start, start + 3);
 
        return (
            <div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {visiblePosts.length > 0 ? (
                        visiblePosts.map((postItem) => (
                            <Card key={postItem.id} className="mx-auto">
                                <CardHeader>
                                    <CardTitle>{postItem.title}</CardTitle>
                                    <CardDescription>Posted on {new Date().toLocaleDateString()}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{postItem.body}</p>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <p>Loading posts...</p>
                    )}
                </div>
                <div className="grid items-center sm:grid-cols-2 lg:grid-cols-3 m-7">
                    <Button
                        onClick={() => {
                            if (start - 3 < 0) {
                                return; // Prevent going past the last post
                            } else {
                                setStart(start - 3); // Move to the next set of posts
                            }
                        }}
                    >
                        Previous
                    </Button>
                
                    <h5>{(start / 3) + 1} of 34 Pages</h5>
                    <Button
                        onClick={() => {
                            if (start + 3 >= posts.length) {
                                return; // Prevent going past the last post
                            } else {
                                setStart(start + 3); // Move to the next set of posts
                            }
                        }}
                    >
                        Next
                    </Button>
                </div>
            </div>
        );
    }
