import axios from 'axios';
const API_URL = process.env.REACT_APP_NOTE_TAKING_APP_BACKEND_URL;
class NoteService {
  getAllNotes() {
    return axios.get(`${API_URL}/api/notes`);
  }
  // More methods for create, update, and delete
};
export default new NoteService();