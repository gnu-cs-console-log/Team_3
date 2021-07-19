import "./styles.css";

interface profile {
  name: String;
  age: number;
}

export default function Profile(props: profile) {
  return (
    <>
      <div id="content">
        <img id="profile_img" src="img\jieun.jpg" alt="profile_img"></img>
        <div id="introduction">
          <p id="intro_first">{props.name}</p>
          <p id="intro_second">{props.age}</p>
          <p id="intro_third">
            <span>Web Developer</span> from Republic of Korea 🇰🇷
          </p>
          <img
            src="img\instagram.png"
            alt="instagram"
            onClick={() =>
              (window.location.href = "https://www.instagram.com/jjijji_p/")
            }
          ></img>
          <img
            src="img\github.png"
            alt="github"
            onClick={() =>
              (window.location.href = "https://github.com/jieunb3333")
            }
          ></img>
          <img
            src="img\facebook.png"
            alt="facebook"
            onClick={() =>
              (window.location.href =
                "https://www.facebook.com/profile.php?id=100004727674732")
            }
          ></img>
        </div>
      </div>
    </>
  );
}
