import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/gaspode/jsontest",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getRooms(jobId) {
    return Promise.resolve(
      JSON.parse(
        '{"data":{"rooms":[{"title":"Toilet","windows":[{"id":"1123123555-1231323","gap":"12mm","width":1200,"direction":"SW","height":900,"frame":"PVC","type":"Post-2002","vent":150}],"id":"1123123-1231323"},{"windows":[{"id":"113-1223","gap":"12mm","width":900,"height":700,"direction":"N","frame":"PVC","type":"Post-2002","vent":0},{"frame":"PVC","height":650,"direction":"W","width":1500,"gap":"12mm","id":"112316666623","vent":150,"type":"Post-2002"}],"id":"89gufsd89f98sdf","title":"Bathroom"},{"title":"Dungeon","id":"F7427172-AC09-11EE-BC57-9D63BA0E0544"}]}}'
      )
    );
  },
  addRoom(jobId, newRoomData) {
    return Promise.resolve(
      JSON.parse(
        '{"data":{"rooms":[{"title":"Toilet","windows":[{"id":"1123123555-1231323","gap":"12mm","width":1200,"direction":"SW","height":900,"frame":"PVC","type":"Post-2002","vent":150}],"id":"1123123-1231323"},{"windows":[{"id":"113-1223","gap":"12mm","width":900,"height":700,"direction":"N","frame":"PVC","type":"Post-2002","vent":0},{"frame":"PVC","height":650,"direction":"W","width":1500,"gap":"12mm","id":"112316666623","vent":150,"type":"Post-2002"}],"id":"89gufsd89f98sdf","title":"Bathroom"},{"title":"Dungeon","id":"F7427172-AC09-11EE-BC57-9D63BA0E0544"}]}}'
      )
    );
  },
};
