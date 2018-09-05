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
            for (var x = 1; x < _this.comments.length; x++) {
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
    function Social_Profile(userName, dateOfBirth, gender, interestedIn, relationship, emailAddress, profilePic, phNumber, occupation, education, livesIn, languages, religiousViews, politicalViews, familyMembers, aboutYou, friendList, otherNames, quote, bloodgroup, isDonated) {
        if (education === void 0) { education = []; }
        if (religiousViews === void 0) { religiousViews = []; }
        if (politicalViews === void 0) { politicalViews = []; }
        if (familyMembers === void 0) { familyMembers = []; }
        if (aboutYou === void 0) { aboutYou = ""; }
        if (friendList === void 0) { friendList = []; }
        if (otherNames === void 0) { otherNames = []; }
        var _this = this;
        this.getOverView = function () {
            console.log("Overview");
            console.log(_this.userName);
            if (_this.occupation.length == 0) {
                console.log("No last known occupation");
            }
            else {
                var lastOc = _this.occupation.length;
                console.log(_this.occupation[lastOc - 1]);
            }
            if (_this.education.length == 0) {
                console.log("No last known schools to display");
            }
            else {
                var lastEd = _this.education.length;
                console.log(_this.education[lastEd - 1]);
            }
            var lastCy = _this.livesIn.length;
            console.log(_this.livesIn[lastCy - 1]);
            for (var x in _this.phNumber) {
                console.log(_this.phNumber[x]);
            }
            console.log(_this.dateOfBirth);
        };
        this.getWorkAndEducation = function () {
            console.log("Work and Education");
            if (_this.education.length == 0) {
                console.log("No education info to display");
            }
            else {
                for (var x in _this.education) {
                    console.log(_this.education[x]);
                }
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
            console.log("Contacts and Basic Info");
            for (var x in _this.phNumber) {
                console.log(_this.phNumber[x]);
            }
            for (var x in _this.emailAddress) {
                console.log(_this.emailAddress[x]);
            }
            console.log(_this.dateOfBirth);
            console.log(_this.gender);
            console.log(_this.interestedIn);
            if (_this.languages.length == 0) {
                console.log("No languages available");
            }
            else {
                for (var x in _this.languages) {
                    console.log(_this.languages[x]);
                }
            }
            if (_this.politicalViews.length == 0) {
                console.log("No political views available");
            }
            else {
                for (var x in _this.politicalViews) {
                    console.log(_this.politicalViews[x]);
                }
            }
            if (_this.religiousViews.length == 0) {
                console.log("No religious views available");
            }
            else {
                for (var x in _this.religiousViews) {
                    console.log(_this.religiousViews[x]);
                }
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
            console.log("Family and Relationships");
            console.log(_this.relationship);
            if (_this.familyMembers.length == 0) {
                console.log("No family members to display");
            }
            else {
                for (var x in _this.familyMembers) {
                    console.log(_this.familyMembers[x]);
                }
            }
        };
        this.addFamilyMembers = function (family) {
            if (_this.familyMembers.length == 0) {
                return _this.familyMembers[0] = family;
            }
            return _this.familyMembers.push(family);
        };
        this.getDetailsAboutYou = function () {
            console.log("About You");
            console.log(_this.aboutYou);
            if (_this.otherNames.length == 0) {
                console.log("No alias to dispaly");
            }
            else {
                for (var x in _this.otherNames) {
                    console.log(_this.otherNames[x]);
                }
            }
            console.log(_this.quote);
            console.log(_this.bloodGroup);
            console.log(_this.isDonated);
        };
        this.addQuote = function (quote) {
            return _this.quote = quote;
        };
        this.addBloodGroupAndDonationStatus = function (bloodGroup, donationStatus) {
            _this.bloodGroup = bloodGroup;
            _this.isDonated = donationStatus;
        };
        this.addAboutYou = function (about) {
            _this.aboutYou = about;
        };
        this.addOtherNames = function (name) {
            return _this.otherNames.push(name);
        };
        this.getFriendList = function () {
            console.log("Friend List");
            if (_this.friendList.length == 0) {
                console.log("No friends to display");
            }
            else {
                for (var x in _this.friendList) {
                    console.log(_this.friendList[x]);
                }
            }
        };
        this.addFriends = function (friend) {
            _this.friendList.push(friend);
        };
        this.userName = userName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.interestedIn = interestedIn;
        this.relationship = relationship;
        this.emailAddress = emailAddress;
        this.profilePic = profilePic;
        this.phNumber = phNumber;
        this.occupation = occupation;
        this.education = education;
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
//let firstVideo = new Youtube_Video(1,"First Youtube video", "www.youtube.com/first_youtube_video", "The greatest channel", 2, "Just a sample Video", "04-09-2018", true)
//let secondVideo = new Youtube_Video(2,"Second Youtube video", "www.youtube.com/second_youtube_video", "The greatest channel", 3, "Just another sample Video", "04-09-2018", true, 200, 15, 2, ["This is awesome", "You suck!!", "Make more", "Best I've seen"])
//firstVideo.getVideoTitle();
//firstVideo.getNumberOfViews();
//firstVideo.getUpVotes();
//firstVideo.getDownVotes();
//firstVideo.displayComments();
//firstVideo.addComments("Not bad");
//firstVideo.addComments("I've seen better");
//firstVideo.displayComments();
//firstVideo.likeVideo();
//firstVideo.likeVideo();
//firstVideo.hateVideo();
//firstVideo.getUpVotes();
//firstVideo.getDownVotes();
//secondVideo.getVideoTitle();
//secondVideo.getNumberOfViews();
//secondVideo.subscribeChannel();
//secondVideo.displayComments();
//secondVideo.likeVideo();
//secondVideo.getUpVotes();
//secondVideo.shareVideo();
//secondVideo.getNumberOfSubscribers();
//let first_profile = new Social_Profile("Person", "12-04-1994", "male", "women", "single", ["person@mail.com"],"www.profilepic.com/Person", ["6622554477"], ["software developer"],["ABC School"], ["Chennai"], ["English", "Tamil", "Hindi"])
//first_profile.addEmailAddress("person2@ymail.com");
//first_profile.addFamilyMembers("Mom")
//first_profile.addFriends("friend1")
//first_profile.addNewPlaces("Mumbai")
//first_profile.addLanguages("French")
//first_profile.addNewWork("IT company")
//first_profile.addNewEducation("ABC College")
//first_profile.addPoliticalView("political view of person")
//first_profile.addReligiousViews("religious view of person")
//first_profile.addOtherNames("Human")
//first_profile.addPhnumber("1234546789")
//first_profile.addAboutYou("I am the first person here")
//first_profile.addQuote("I am finally here")
//first_profile.addBloodGroupAndDonationStatus("O", true)
//first_profile.getOverView();
//first_profile.getContactAndBasicInfo();
//first_profile.getDetailsAboutYou();
//first_profile.getPlacesLived();
//first_profile.getWorkAndEducation();
//first_profile.getFamilyAndRelationshipDetails()
