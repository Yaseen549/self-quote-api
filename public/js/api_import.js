
// https://selfqa-e2.vercel.app/api/quotes



// let url = 'https://selfqa-e2.vercel.app/api/quotes';
async function load() {
  const userFiles = require(`./apis/api.json`);
    // let url = 'https://selfqa-e2.vercel.app/api/quotes';
    let obj = await (await fetch(userFiles)).json();
    // console.log(obj);
}

load();





// package version
// const loadPackageDetails = async () => {
//   try {
//     const res = await fetch("https://selfqa-e2.vercel.app/api/quotes");
//     packageDetails = await res.json();
//     // for(var i = 0; i<= packageDetails.length-1;i++){
//     //   console.log(packageDetails[i].id);
//     // }
//     var packageVersion = packageDetails[0].username;
//     $(".packageVersion").text(packageVersion);
//
//   } catch (err) {
//     console.error(err);
//   }
// };
// loadPackageDetails();