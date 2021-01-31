import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";
import "./blog.css";

export default function Blog() {
	const [postData, setPost] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"]{
                title,
                slug,
                mainImage{asset->{_id,url},alt}}`
			)
			.then((data) => setPost(data))
			.catch(console.error);
	}, []);

	return (
		<main>
			<section>
				<h1>Blog Posts Page</h1>
				<h2>What subject do you fancy?</h2>
				<div>
					{postData &&
						postData.map((post, index) => (
							<article key={index}>
								<Link
									to={"/blog/" + post.slug.current}
									key={post.slug.current}
								>
									<div>
										<h3>{post.title}</h3>
										<img
											class='clear'
											src={post.mainImage.asset.url}
											alt=''
										/>
									</div>
								</Link>
							</article>
						))}
				</div>
			</section>
		</main>
	);
}
