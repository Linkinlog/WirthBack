import React from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
	return (
		<div className="text-center col-md-8 offset-md-2">
			<article>
				<header>
					<h1>
						<Link className="blog-title nav-link" to="/blog">
							Why did I start a blog?
						</Link>
					</h1>
					<div>
						<div className="blog-title">
							<time>July 13, 2021</time>
						</div>
					</div>
				</header>
				<div className="blog-text text-start mt-3">
					<p>For those of you who may know me, you’re probably wondering, “Why on earth is she starting a blog with everything else going on?”</p>
					<p>For those of you who don’t know me from Adam, hi! I’m Samantha and I am so blessed to have you here!</p>
					<p>Whether you know me already or not quite yet, it’s probably pretty clear from my first statement, but, Yes, I am very busy! Yes, I do work part-time, ‘wife’ and ‘mom’ full-time, and work on my house and homestead full-time; but, there en-lies the answer to the WHY, too. In the midst of doing all these things, my passion at my core is to share my experiences and to teach.&nbsp;</p>
					<p>For years people have asked me how I do it all or what worked best for me in this area of my life or that or how did you do all of that while going through that.&nbsp; So for years I have dreamed of blogging about our little life, and believe you me, it is not just to broadcast my life and success.&nbsp; No!&nbsp; I have dreamed about blogging because I want to help others.&nbsp; I want to encourage others that there are simple places to start homesteading, or healthy living, or working on their own personal wellness.&nbsp; You don’t have to “DO IT ALL” at once! We are all baby-stepping our way along the path to our big dreams!</p>
					<p>I want to reveal what God does in our lives through our testimonies and our trials, because I know that is part of what I’m called to do. &nbsp; It’s just one of those things you know deep in your gut and heart.</p>
					<p>I’m a reader.&nbsp; I’m a Do-It-Yourselfer.&nbsp; I’m a teacher.&nbsp; I’m an encourager.&nbsp; I’m a daughter and disciple of the one, true King.&nbsp; I’m a homebody who is inviting everybody to come along with us in our journey.&nbsp; Not for my own edification, but for their own benefit and growth.&nbsp; Jesus told us to love God and love others.&nbsp; We are called and commanded to be “others-minded” and Spirit-led.</p>
					<p>If you stripped everything away—house, family, friends, dog—I would still have a story. That is something no one can ever take away from me.&nbsp; I have a story and a reason to share.&nbsp; I want to encourage others through our story and through our journey.&nbsp; You see, everything is always deeper than just the surface dream.&nbsp; Beneath it all, is God’s divine purpose and plan.&nbsp; I’m just walkin’ in it and trusting in Him to lead me.&nbsp;</p>
					<p>Thank you for being here.&nbsp; I pray you enjoy your stay and are blessed by the content you find here.</p>
				</div>
				{/* ToDo add comments */}
			</article>
		</div>
	);
};
