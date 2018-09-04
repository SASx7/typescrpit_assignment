var Youtube_Video = /** @class */ (function () {
    function Youtube_Video(videoID, videoTitle, videoURL, channelName, numberOfSubscibers, description, uploadedOn, isVerified, numberOfViews, numberOfUpvotes, numberOfDownVotes, comments) {
        if (numberOfViews === void 0) { numberOfViews = 0; }
        if (numberOfUpvotes === void 0) { numberOfUpvotes = 0; }
        if (numberOfDownVotes === void 0) { numberOfDownVotes = 0; }
        if (comments === void 0) { comments = [""]; }
        var _this = this;
        this.getNumberOfViews = function () {
            console.log(_this.numberOfViews);
        };
        this.getRecommendedVideo = function () {
            console.log("These are your related videos");
        };
        this.getChannelName = function () {
            console.log(_this.channelName);
        };
        this.getUpVotes = function () {
            console.log(_this.numberOfUpvotes);
        };
        this.getDownVotes = function () {
            console.log(_this.numberOfDownVotes);
        };
        this.getNumberOfSubscribers = function () {
            console.log(_this.numberOfSubscribers);
        };
        this.getVideoTitle = function () {
            console.log(_this.videoTitle);
        };
        this.getDescription = function () {
            console.log(_this.description);
        };
        this.displayComments = function () {
            var numberOfComments = _this.comments.length;
            console.log(numberOfComments);
            for (var x in _this.comments) {
                console.log(_this.comments[x]);
            }
        };
        this.addComments = function (comment) {
            _this.comments.push(comment);
        };
        this.likeVideo = function () {
            _this.numberOfUpvotes += 1;
        };
        this.hateVideo = function () {
            _this.numberOfDownVotes += 1;
        };
        this.subscribeChannel = function () {
            _this.numberOfSubscribers += 1;
        };
        this.shareVideo = function () {
            console.log(_this.videoURL);
        };
        this.videoID = videoID;
        this.videoTitle = videoTitle;
        this.videoURL = videoURL;
        this.channelName = channelName;
        this.numberOfViews = numberOfViews;
        this.numberOfUpvotes = numberOfUpvotes;
        this.numberOfDownVotes = numberOfDownVotes;
        this.numberOfSubscribers = numberOfSubscibers;
        this.description = description;
        this.comments = comments;
        this.isVerified = isVerified;
    }
    return Youtube_Video;
}());
var Social_Profile = /** @class */ (function () {
    function Social_Profile(userName, dateOfBirth, gender, interestedIn, relationship, prifilePic, phNumber, occupation, livesIn, languages, religiousViews, politicalViews, familyMembers, aboutYou, otherNames, quote, bloodgroup, isDonated, friendList) {
        var _this = this;
        this.getOverView = function () {
            var lastOc = _this.occupation.length;
            console.log(_this.occupation[lastOc - 1]);
            var lastEd = _this.education.length;
            console.log(_this.education[lastEd - 1]);
            var lastCy = _this.livesIn.length;
            console.log(_this.livesIn[lastCy - 1]);
            for (var x in _this.phNumber) {
                console.log(_this.phNumber[x]);
            }
            console.log(_this.dateOfBirth);
        };
        this.getWorkAndEducation = function () {
            for (var x in _this.education) {
                console.log(_this.education[x]);
            }
            for (var x in _this.occupation) {
                console.log(_this.occupation[x]);
            }
        };
        this.addNewWork = function (work) {
            return _this.occupation.push(work);
        };
        this.addNewEducation = function (edu) {
            return _this.education.push(edu);
        };
        this.getPlacesLived = function () {
            for (var x in _this.livesIn) {
                console.log(_this.livesIn[x]);
            }
        };
        this.addNewPlaces = function (place) {
            return _this.livesIn.push(place);
        };
        this.getContactAndBasicInfo = function () {
            for (var x in _this.phNumber) {
                console.log(_this.phNumber[x]);
            }
            for (var x in _this.emailAddress) {
                console.log(_this.emailAddress[x]);
            }
            console.log(_this.dateOfBirth);
            console.log(_this.gender);
            console.log(_this.interestedIn);
            for (var x in _this.languages) {
                console.log(_this.languages[x]);
            }
            for (var x in _this.politicalViews) {
                console.log(_this.politicalViews[x]);
            }
            for (var x in _this.religiousViews) {
                console.log(_this.religiousViews[x]);
            }
        };
        this.addPhnumber = function (phNum) {
            return _this.phNumber.push(phNum);
        };
        this.addEmailAddress = function (email) {
            return _this.emailAddress.push(email);
        };
        this.addLanguages = function (language) {
            return _this.languages.push(language);
        };
        this.addPoliticalView = function (political) {
            return _this.politicalViews.push(political);
        };
        this.addReligiousViews = function (religion) {
            return _this.religiousViews.push(religion);
        };
        this.getFamilyAndRelationshipDetails = function () {
            console.log(_this.relaionship);
            for (var x in _this.familyMembers) {
                console.log(_this.familyMembers[x]);
            }
        };
        this.addFamilyMembers = function (family) {
            return _this.familyMembers.push(family);
        };
        this.getDetailsAboutYou = function () {
            console.log(_this.aboutYou);
            for (var x in _this.otherNames) {
                console.log(_this.otherNames[x]);
            }
            console.log(_this.quote);
            console.log(_this.bloodGroup);
            console.log(_this.isDonated);
        };
        this.addAboutYou = function (about) {
            _this.aboutYou = about;
        };
        this.addOtherNames = function (name) {
            return _this.otherNames.push(name);
        };
        this.getFriendList = function () {
            for (var x in _this.friendList) {
                console.log(_this.friendList[x]);
            }
        };
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
    return Social_Profile;
}());
var firstVideo = new Youtube_Video(1, "First Youtube video", "www.youtube.com/first_youtube_video", "The greatest channel", 2, "Just a sample Video", "04-09-2018", true);
var secondVideo = new Youtube_Video(2, "Second Youtube video", "www.youtube.com/second_youtube_video", "The greatest channel", 3, "Just another sample Video", "04-09-2018", true, 200, 15, 2, ["This is awesome", "You suck!!", "Make more", "Best I've seen"]);
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
