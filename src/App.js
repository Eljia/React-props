import "./App.css";
import Profile from "./profile/Profile";
import img from "./ff.jpg";

function App() {
  const pro = {
    fullName: "Eljia Ben Aissa",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur mollitia rerum aut, maiores laboriosam pariatur nemo natus voluptatum impedit officiis tempore praesentium cupiditate blanditiis animi soluta unde eaque quasi dolores?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur mollitia rerum aut, maiores laboriosam pariatur nemo natus voluptatum impedit officiis tempore praesentium cupiditate blanditiis animi soluta unde eaque quasi dolores?",
    profession: "MERN stack developer",
  };

  return (
    <div className="App">
      <Profile proo={pro}>
        <div class="losange">
          <div class="los1">
            <img src={img} alt="" />
          </div>
        </div>
      </Profile>
    </div>
  );
}

export default App;
