// const fakeUser = {
//   userName: "David",
//   loggedIn: false,
// };
const videos = [
  {
    id: 1,
    title: "Hello",
    createdAt: "2 minutes ago",
    views: 19,
    comment: 2,
    rating: 5,
  },
  {
    id: 2,
    title: "Video #2",
    views: 29,
    comment: 2,
    rating: 5,
  },
  {
    id: 3,
    title: "WhatUp",
    views: 39,
    comment: 2,
    rating: 5,
  },
];
export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  // console.log(id);
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  // console.log(req);
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  console.log(req.body);
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    id: videos.length + 1,
    title: "Video #2",
    createdAt: "Now",
    views: 0,
    comment: 0,
    rating: 0,
  };
  // console.log(req.body);
  videos.push(newVideo);
  return res.redirect("/");
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
