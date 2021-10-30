enum POST_TYPE {
    NORMAL = "NORMAL",
    EVENT = "EVENT"
}
export default class Post {
    constructor(
        private id: string,
        private user_id: string,
        private type: POST_TYPE,
        private photo_url: string,
        private timestamp: number
    ) {}
    public getId() : string {
        return this.id
    }
    public getUserId() : string {
        return this.user_id
    }
    public getType() : string {
        return this.type
    }
    public getPhotoUrl() : string {
        return this.photo_url
    }
    public getTimestamp() : number {
        return this.timestamp
    }
}