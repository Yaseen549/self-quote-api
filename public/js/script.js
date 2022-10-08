// package version
const loadPackageDetails = async () => {
  try {
    // const res = await fetch("https://selfqa-e2.vercel.app/apis/quotes");
    const res = await fetch(`https://${process.env.VERCEL_URL}/apis/quotes`);
    packageDetails = await res.json();
    packageVersion = packageDetails[0].type;
    // downloadURL = packageDetails.info.download_url;
    // lastDownloads = packageDetails.info.downloads.last_day;
    console.log(packageVersion);
    $(".packageVersion").text("v" + packageVersion);
    // $(".downloadURL").attr("href",downloadURL);
    // $(".lastDownloads").text(lastDownloads);


  } catch (err) {
    console.log(err);
  }
};
loadPackageDetails();