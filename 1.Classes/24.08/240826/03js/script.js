// geolocation => 사용자의 위치를 파악하기 위한 목적 API
// getCurrentPosition(successCB, errorCB, options)

const getLocation = document.querySelector("#getLocation");

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerText = `위도 : ${position.coords.latitude} , 경도 : ${position.coords.longitude}`;
};

const errorPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  // console.log("click")
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition); //window 생략

    const options ={
      enableHightAccuracy: true,
      maximumAge: 0,
    }

    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else {
    alert("Geolocation울 지원하지 않습니다!");
  }
});
