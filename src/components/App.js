import { useState, useEffect } from "react";
import Search from "./Search";
import youTube from "../apis/ApiKey";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		onTermSubmit("birds");
	}, []);

	const onTermSubmit = async (term) => {
		const response = await youTube.get("/search", {
			params: {
				q: term,
			},
		});
		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0]);
	};
	const onVideoSelect = (video) => {
		setSelectedVideo(video);
	};

	return (
		<div className="ui container">
			<Search onFormSubmit={onTermSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList
							onVideoSelect={onVideoSelect}
							videos={videos}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
