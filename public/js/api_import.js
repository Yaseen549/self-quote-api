













// package version
const loadAPIDetails = async () => {
  try {
    const res = await fetch("https://selfqa-e2.vercel.app/api/quotes");
    packageDetails = await res.json();
    console.log(packageDetails[0]);
    $(".packageVersion").text(packageDetails[0]);
  } catch (err) {
    console.error(err);
  }
};
loadAPIDetails();