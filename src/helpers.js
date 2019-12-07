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

export function showAlertMessage( message, type='primary', timeout = 5000){
    const bvToaster =  this.$bvToast;
    bvToaster.toast(message, {
        variant:type,
        autoHideDelay: timeout,
        appendToast: true,
    });
}

export const getUiAvatarUrl = (name, size=179, color="ffffff", background='64c3c0', rounded = true) => `https://ui-avatars.com/api/?name=${name}&size=${size}&color=${color}&background=${background}&rounded=${rounded}`;

export function metaResolver (component){
        const propName = this;
        const { name, description, meta_title , meta_description, profile_image , around_image , cover_image , meta_image} = component[propName];
        return {
            title: meta_title || name || '',
            meta:[
                {
                    name: 'description',
                    content: meta_description || description || ''
                },
                {
                    name: 'og:title',
                    content: meta_title || name || ''
                },
                {
                    name: 'og:image',
                    content: meta_image || cover_image || around_image || profile_image || ''
                },
                {
                    name: 'og:description',
                    content: meta_description || description || ''
                },
                {
                    name: 'twitter:title',
                    content: meta_title || name || ''
                },
                {
                    name: 'twitter:image',
                    content: meta_image || cover_image || around_image || profile_image || ''
                },

            ]
        }
};
