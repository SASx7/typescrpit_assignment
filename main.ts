
class Youtube_Video{
    
    private videoID : number;
    private videoTitle : string;
    private videoURL : string;
    private channelName : string;
    private numberOfViews : number;
    private numberOfUpvotes : number;
    private numberOfDownVotes : number;
    private numberOfSubscribers
    private description : string;
    private comments : string[];
    private uploadedOn : string;
    private isVerified : boolean;
   

    constructor (videoID : number, videoTitle: string, videoURL: string, channelName: string,numberOfSubscibers: number, description: string, uploadedOn:string, isVerified: boolean, numberOfViews: number = 0, numberOfUpvotes: number = 0, numberOfDownVotes: number = 0, comments: string[] = [""]){
        this.videoID = videoID;
        this.videoTitle = videoTitle;
        this.videoURL = videoURL;
        this.channelName = channelName;
        this.numberOfViews = numberOfViews;
        this.numberOfUpvotes = numberOfUpvotes;
        this.numberOfDownVotes = numberOfDownVotes;
        this.numberOfSubscribers = numberOfSubscibers
        this.description = description;
        this.comments = comments;
        this.isVerified = isVerified;
     
        
    }
    getNumberOfViews = () =>{

        console.log(this.numberOfViews);
    }

    getRecommendedVideo = () => {
        console.log("These are your related videos")
    }
        
    getChannelName = () => {
        console.log(this.channelName);
    }

    getUpVotes = () => {
        console.log(this.numberOfUpvotes);
    }

    getDownVotes = () => {
        console.log(this.numberOfDownVotes);
    }

    getNumberOfSubscribers = () => {
        console.log(this.numberOfSubscribers);
    }

    getVideoTitle = () => {
        console.log(this.videoTitle);
    }

    getDescription = () => {
        console.log(this.description);
    }


    displayComments = () =>{
        
        
        let numberOfComments = this.comments.length;
        
        console.log(numberOfComments);
        for (let x in this.comments){
            console.log(this.comments[x])
        }
    }

    addComments = (comment : string) =>{
        this.comments.push(comment);
    }

    likeVideo = () =>{
        this.numberOfUpvotes+=1;
    }

    hateVideo = () => {
        this.numberOfDownVotes+=1;
    }

    subscribeChannel = () => {
        this.numberOfSubscribers+=1;
    }

    shareVideo = () =>{
        console.log(this.videoURL);
    } 

}



class Social_Profile {

    private userName : string
    private profilePic : string;
    private phNumber : string[];
    private dateOfBirth : string;
    private occupation : string[];
    private education : string[];
    private livesIn : string[];
    private emailAddress : string[];
    private gender : string;
    private interestedIn : string;
    private languages : string[];
    private religiousViews : string[];
    private politicalViews : string[];
    private relaionship : string;
    private familyMembers : string[];
    private aboutYou : string;
    private otherNames : string[];
    private quote : string;
    private bloodGroup : string;
    private isDonated : boolean;
    private friendList : string[];
    
    constructor (userName : string, dateOfBirth : string, gender : string, interestedIn : string, relationship : string, prifilePic ?: string, phNumber ?: string[], occupation ?: string[], livesIn ?: string[], languages ?: string[], religiousViews ?: string[], politicalViews ?: string[], familyMembers ?: string[], aboutYou ?: string, otherNames ?: string[], quote ?: string, bloodgroup ?: string, isDonated ?: boolean, friendList ?: string[]){
        
        this.userName = userName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.interestedIn = interestedIn;
        this.relaionship = this.relaionship;
        this.profilePic = this.profilePic;
        this.phNumber = phNumber;
        this.occupation = occupation;
        this.livesIn = livesIn;
        this.languages = languages;
        this.religiousViews = religiousViews;
        this.politicalViews = politicalViews;
        this.familyMembers = familyMembers;
        this.aboutYou = aboutYou;
        this.otherNames = otherNames;
        this.quote = quote;
        this.bloodGroup = bloodgroup;
        this.isDonated = isDonated;
        this.friendList = friendList;
    }

    getOverView = () => {
        let lastOc = this.occupation.length;
        console.log(this.occupation[lastOc-1]);
        
        let lastEd = this.education.length;
        console.log(this.education[lastEd-1]);

        let lastCy = this.livesIn.length;
        console.log(this.livesIn[lastCy-1]);

        for (let x in this.phNumber){
            console.log(this.phNumber[x]);
        }

        console.log(this.dateOfBirth);

    }



    getWorkAndEducation = () => {
        for (let x in this.education ){
            console.log(this.education[x])
        }

        for (let x in this.occupation){
            console.log(this.occupation[x])
        }
    }
    
    addNewWork = (work : string) => {
        return this.occupation.push(work);
    }

    addNewEducation = (edu : string) => {
        return this.education.push(edu);
    }

    getPlacesLived = () => {    
        for (let x in this.livesIn){
            console.log(this.livesIn[x])
        }
    }

    addNewPlaces = (place : string) => {
        return this.livesIn.push(place);
    }

    getContactAndBasicInfo = () => {
        for (let x in this.phNumber){
            console.log(this.phNumber[x]);
        }

        for (let x in this.emailAddress){
            console.log(this.emailAddress[x])
        }

        console.log (this.dateOfBirth);
        console.log (this.gender);
        console.log(this.interestedIn);
        for (let x in this.languages){
            console.log(this.languages[x])
        }
        for (let x in this.politicalViews){
            console.log(this.politicalViews[x])
        }
        for (let x in this.religiousViews){
            console.log(this.religiousViews[x])
        }
    }

    addPhnumber = (phNum : string) =>{
        return this.phNumber.push(phNum);
    }

    addEmailAddress = (email : string) => {
        return this.emailAddress.push(email);
    }

    addLanguages = (language : string) => {
        return this.languages.push(language);
    }

    addPoliticalView = (political : string) => {
        return this.politicalViews.push(political);
    }

    addReligiousViews = (religion : string) => {
        return this.religiousViews.push(religion);
    }
    
    getFamilyAndRelationshipDetails = () => {
        console.log(this.relaionship);

        for(let x in this.familyMembers){
            console.log(this.familyMembers[x]);
        }
    }

    addFamilyMembers = (family : string) => {
        return this.familyMembers.push(family);
    }

    getDetailsAboutYou = () => {
        console.log(this.aboutYou);

        for (let x in this.otherNames){
            console.log(this.otherNames[x]);
        }

        console.log(this.quote);

        console.log(this.bloodGroup);

        console.log(this.isDonated);
    }

    addAboutYou = (about : string) => {
        this.aboutYou = about;
    }

    addOtherNames = (name : string) => {
        return this.otherNames.push(name);
    }

    getFriendList = () => {
        for (let x in this.friendList){
            console.log(this.friendList[x])
        }
    }
}
    
let firstVideo = new Youtube_Video(1,"First Youtube video", "www.youtube.com/first_youtube_video", "The greatest channel", 2, "Just a sample Video", "04-09-2018", true)
let secondVideo = new Youtube_Video(2,"Second Youtube video", "www.youtube.com/second_youtube_video", "The greatest channel", 3, "Just another sample Video", "04-09-2018", true, 200, 15, 2, ["This is awesome", "You suck!!", "Make more", "Best I've seen"])

firstVideo.getVideoTitle();
firstVideo.getNumberOfViews();
firstVideo.getUpVotes();
firstVideo.getDownVotes();
firstVideo.displayComments();
firstVideo.addComments("Not bad");
firstVideo.addComments("I've seen better");
firstVideo.displayComments();
firstVideo.likeVideo();
firstVideo.likeVideo();
firstVideo.hateVideo();
firstVideo.getUpVotes();
firstVideo.getDownVotes();