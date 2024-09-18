import Blog from "@/components/blog/Blog";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Interactive therapeutic media to improve adolescent mental health | Feel Better in Minutes",
};
export default function BlogPage(){
    return (
            <Blog />
    )
}