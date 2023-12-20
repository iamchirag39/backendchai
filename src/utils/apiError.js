class apiError extends Error{
    constructor(
        statusecode,
        message="somthing wrong",
        errors=[],
        statck=""
    ){
        super(message)
        this.statusecode=statusecode
        this.message=message,
        this.errors=errors,
        this.success=false
        this.data=null

        if(statck){
            this.stack=statck
        }else{
            Error.captureStackTrace(this,this.constructer)
        }
    }
}