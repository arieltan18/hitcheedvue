export const fileToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export const resizedImageUrl = (imageUrl, width=0, height = 0)=>{
    const url = new URL(imageUrl);
    const search = url.search;
    const size = `${width}x${height}`;
    url.search = search? `${search}&d=${size}` : `?d=${size}`;
    return url.href;
};
