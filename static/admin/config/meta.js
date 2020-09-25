module.exports = {
    backend: {
        name: "github",
        repo: "i-koptev/ik-base",
        branch: "master",
        commit_messages: {
            create: "Create {{collection}} “{{slug}}”",
            update: "Update {{collection}} “{{slug}}”",
            delete: "Delete {{collection}} “{{slug}}”",
            uploadMedia: "[skip ci] Upload “{{path}}”",
            deleteMedia: "[skip ci] Delete “{{path}}”",
        },
    },
    local_backend: true,
    media_folder: "static/img",
    public_folder: "/img",
    display_url: "https://matlify.netlify.com",

    collections: [],
}
