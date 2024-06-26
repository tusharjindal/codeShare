import axios from "axios";

const host = "http://localhost:3000";

const getRoomValue = (roomid, user) => {
  return axios.get("/room/data", { params: { roomid, user } });
};

const createRoom = (title, roomid, user) => {
  console.log("room created ",{ title, roomid, owner: user })
  return axios.post(`${host}/room/create`, { title, roomid, owner: user });
};

const saveCode = (roomid, value) => {
  return axios.post(`${host}/room/update`, { roomid, value });
};

const addMember = (roomid, roomname, recipient, user) => {
  return axios.post(`${host}/member/add`, {
    roomid,
    roomname,
    recipient,
    user,
  });
};

const authMember = (roomid, user) => {
  return axios.get("/member/auth", {
    params: { roomid, user },
  });
};

const deleteRoom = (roomid) => {
  return axios.delete("/room/delete", { data: { roomid } });
};

const getAllRooms = (user) => {
  return axios.get("/room/list", { params: { user } });
};

export default {
  getAllRooms,
  getRoomValue,
  createRoom,
  saveCode,
  addMember,
  deleteRoom,
  authMember,
};
