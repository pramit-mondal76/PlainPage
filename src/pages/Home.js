import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase-config';

function Home({ isAuth }) {
	const [postLists, setPostLists] = useState([]);
	const postCollectionRef = collection(db, "posts")
	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(postCollectionRef);
			setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getPosts();
	});

	const deletePost = async (id) => {
		const postDoc = doc(db, "posts", id)
		await deleteDoc(postDoc);
	}
	return (
		<div className='homePage'>
			{
				postLists.map((post) => {
					return (
						<div className='post'>
							<div className='postHeader'>
								<div className='title'>
									<h3>{post.title}</h3>
								</div>
								<div className='deletePost'>

									{isAuth && post.author.id === auth.currentUser.uid && (<button onClick={() => { deletePost(post.id) }}>&#128465;</button>
									)}
								</div>
							</div>


							<div className='postTextContainer'>{post.postText}</div>
							{post.author && post.author.name && <h5>@{post.author.name}</h5>}
						</div>
					);
				})
			}
		</div>
	)
}

export default Home
