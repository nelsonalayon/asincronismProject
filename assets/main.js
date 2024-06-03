const content = null || document.getElementById("content");

const url =
  "https://youtube-v3-alternative.p.rapidapi.com/channel?id=UCeptR6w7QTmADvFf7VI6MNQ";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a8ffb97eebmsh47d35991db4b1b1p1ee429jsn6eca77a9cd9b",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(url);
    
    let view = `
    ${videos.data
      .map(
        (video) => `
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.thumbnail[0].url}" alt="" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.title}
      </h3>
    </div>
  </div>
    `
      )
      .slice(0, 6)
      .join("")}
    
    `;
    
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
