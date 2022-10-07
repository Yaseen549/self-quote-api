// package version
const loadPackageDetails = async () => {
  try {
    const res = await fetch("https://selfqa-e2.vercel.app/apis/quotes",);
    packageDetails = await res.json();
    // for(var i = 0; i<= packageDetails.length-1;i++){
    //   console.log(packageDetails[i].id);
    // }
    var packageVersion = packageDetails[0].username;
    console.log(packageVersion);
    $(".packageVersion").text(packageVersion);

  } catch (err) {
    console.error(err);
  }
};
loadPackageDetails();