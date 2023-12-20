class ApiResonse{
    constructor(statuscode,data,success="false"){
        this.statuscode=statuscode,
        this.messege=messege,
        this.success=statuscode<400
        this.data=data
    }
}