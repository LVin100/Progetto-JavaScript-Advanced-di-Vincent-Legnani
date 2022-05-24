import styles from "../CSS/style.css";
let arrNews = [];
const afterLoadingNews = async () => {
  try {
    let idsResponse = await axios.get(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );
    arrNews = _.get(idsResponse, ["data"]);
  } catch (errors) {
    alert(errors);
  }

  for (let i = 0; i < 10; i++) {
    try {
      let response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${arrNews[i]}.json`
      );
      //   const news = _.get(response, ["data","title"]);
      let card = document.createElement("div");
      card.className =
        "card bg-dark text-light text-center border-bottom-light m-1 mx-auto w-75";
      document.getElementById("elenco-news").appendChild(card);
      let cardBody = document.createElement("div");
      cardBody.className = "card-body";
      card.appendChild(cardBody);

      let p = document.createElement("p");
      p.className = "class-text text-info";
      let unixTimestamp = _.get(response, ["data", "time"]);
      var date = new Date(unixTimestamp * 1000);

      let t = document.createTextNode(
        date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " " +
          date.getHours() +
          (date.getMinutes() < 10
            ? ":0" + date.getMinutes()
            : ":" + date.getMinutes()) +
          (date.getSeconds() < 10
            ? ":0" + date.getSeconds()
            : ":" + date.getSeconds())
      );
      p.appendChild(t);
      cardBody.appendChild(p);

      let h5 = document.createElement("h5");
      h5.className = "card-title m-3";
      let tH = document.createTextNode(_.get(response, ["data", "title"]));
      h5.appendChild(tH);
      cardBody.appendChild(h5);

      let a = document.createElement("a");
      a.className = "btn btn-warning text-dark";
      a.href = _.get(response, ["data", "url"]);
      let tA = document.createTextNode("Vai alla news");
      a.appendChild(tA);
      cardBody.appendChild(a);
      //console.log(data.url),

      if (
        _.get(response, ["data", "title"]) == "" ||
        _.get(response, ["data", "url"] == "")
      ) {
        document.getElementById("elenco-news").removeChild(card);
      }
    } catch (errors) {
      alert(errors);
    }
  }
  console.log(numeroNews);
};
afterLoadingNews();

const loadMore = document.getElementById("load-more");
let numeroNews = 10;
loadMore.addEventListener("click", async () => {
  for (let i = numeroNews; i < numeroNews + 10; i++) {
    try {
      let response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${arrNews[i]}.json`
      );

      let card = document.createElement("div");
      card.className =
        "card bg-dark text-light text-center border-bottom-light m-1 mx-auto w-75";
      document.getElementById("elenco-news").appendChild(card);
      let cardBody = document.createElement("div");
      cardBody.className = "card-body";
      card.appendChild(cardBody);

      let p = document.createElement("p");
      p.className = "class-text text-info";

      let unixTimestamp = _.get(response, ["data", "time"]);
      var date = new Date(unixTimestamp * 1000);

      let t = document.createTextNode(
        date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " " +
          date.getHours() +
          (date.getMinutes() < 10
            ? ":0" + date.getMinutes()
            : ":" + date.getMinutes()) +
          (date.getSeconds() < 10
            ? ":0" + date.getSeconds()
            : ":" + date.getSeconds())
      );
      p.appendChild(t);
      cardBody.appendChild(p);

      let h5 = document.createElement("h5");
      h5.className = "card-title m-3";
      let tH = document.createTextNode(_.get(response, ["data", "title"]));
      h5.appendChild(tH);
      cardBody.appendChild(h5);

      let a = document.createElement("a");
      a.className = "btn btn-warning text-dark";
      a.href = _.get(response, ["data", "url"]);
      let tA = document.createTextNode("Vai alla news");
      a.appendChild(tA);
      cardBody.appendChild(a);

      if (
        _.get(response, ["data", "title"]) == "" ||
        _.get(response, ["data", "url"] == "")
      ) {
        document.getElementById("elenco-news").removeChild(card);
      }
    } catch (errors) {
      alert(errors);
    }
  }
  numeroNews += 10;
  console.log(numeroNews);
});
