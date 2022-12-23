// // package version
// const loadPackageDetails = async () => {
//   try {
//     const res = await fetch(`https://selfqa.vercel.app/api/quotes`);
//     // const res = await fetch(`https://localhost:3000/apis/quotes`);
//     // var domain = `selfqa.vercel.app`;
//     // const res = await fetch(`https://${domain}/apis/quotes`);
//     // const res = await fetch(`https://${process.env.VERCEL_URL}/apis/quotes`);
//     packageDetails = await res.json();
//     packageVersion = packageDetails[0].type;
//     // downloadURL = packageDetails.info.download_url;
//     // lastDownloads = packageDetails.info.downloads.last_day;
//     console.log(packageVersion);
//     $(".packageVersion").text("v" + "packageVersion");
//     // $(".downloadURL").attr("href",downloadURL);
//     // $(".lastDownloads").text(lastDownloads);
//
//
//   } catch (err) {
//     console.log(err);
//   }
// };
// loadPackageDetails();

// package version
const loadPackageDetails = async () => {
  try {
    const res = await fetch("https://selfqa-e3.netlify.app/apis/api.json");
    packageDetails = await res.json();
    console.log(res[0]);
    packageVersion = packageDetails.info.version;
    downloadURL = packageDetails.info.download_url;
    lastDownloads = packageDetails.info.downloads.last_day;
    console.log(packageVersion);
    $(".packageVersion").text("v" + "packageVersion" + res);
    $(".downloadURL").attr("href",downloadURL);
    $(".lastDownloads").text(lastDownloads);


  } catch (err) {
    console.error(err);
  }
};
loadPackageDetails();

const loadPackageDetails88 = async () =>{
  try{
    const res = await fetch('https://selfqa.vercel.app/api/quotes')
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log(res)
  }catch (err){}
}

loadPackageDetails88()

