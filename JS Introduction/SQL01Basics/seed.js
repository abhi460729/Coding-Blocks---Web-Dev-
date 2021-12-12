const {db, Center, Season, Batch, Course, Teacher} =require('./model1')

const seed = async() =>{
    try{
        db.sync({alter:true})

        await Center.bulkCreate([
            {id:'PP',name:'Pitampura',city:'New Delhi'},
            {id:'DW',name:'Dwarka',city:'New Delhi'},
            {id:'NO',name:'Noida',city:'New Delhi'},
            {id:'DD',name:'Dehradun',city:'Dehradun'},
            {id:'OL',name:'Online',city:'New Delhi'}
        ],{
            ignoreDuplicates: true
        })

        await Season.bulkCreate([
            {id:'S',name:'Summer'},
            {id:'F',name:'Fall'},
            {id:'W',name:'Winter'},
            {id:'S',name:'Spring'}
        ],{
            ignoreDuplicates: true
        })

        await Course.bulkCreate([
            {id:'LP',name:'Launchpad'},
            {id:'CX',name:'Crux'},
            {id:'IB',name:'Interview Bootcamp'},
            {id:'AD',name:'Android Development'},
            {id:'WD',name:'Web Development(Node JS)'}
        ],{
            ignoreDuplicates: true
        })

    }catch(e){
        console.error(e)
    }
}

seed()