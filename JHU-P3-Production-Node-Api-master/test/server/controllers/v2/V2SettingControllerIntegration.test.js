var Sails = require('sails');
var assert = require ('assert');
var passportStub = require ('passport-stub');
var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var adapter = require('sails-memory');

var agent, objects = [];


var fakeUsers = {
  'patient': {"actualChildBirth":"2016-07-04","address":"Slaphappy humanitarians","cellPhone":"Depoliticizes valedictorian","city":"Agglomerate lithographers","clinicianCodeId":7107,"clinicName":"Irishwoman naturals","consentAcceptedOn":"2001-07-31 06:15:50 +0000","contactCellPhone":"Hygienist Moscow","contactEmail":"Marmalade overflow","contactHomePhone":"Easters prostitutes","contactName":"Spruced libelers","deactivatedOn":"2002-09-23 02:22:47 +0000","educationId":1435,"email":"antoine.carter32@vaccinesurvey.com","expectedChildBirth":"2016-12-17","firstName":"Dario","hasContactUsers":true,"homePhone":"Smells electioneering","interventionGroup":"Ionizes begets","isDeactive":false,"lastName":"Reichel","parentRelationshipType":"Abroad fortifications","parentUserId":49784,"password":"password","passwordConfirmation":"password","passwordDigest":"Multiprocessing successfully","patientType":17315,"postalCode":"Ingenuousness arias","raceId":10922,"reasonForDeactivation":"Americanization discouragements","resetPassword":true,"role":"patient","state":"Bevel coquetting","updatedUserProfile":true,"vaccinationReminders":false,"xSessionId":"Irrelevancies Kristina"},
  'administrator': {"actualChildBirth":"2015-10-02","address":"Accreditation barbs","cellPhone":"Constantinople copier","city":"Wildcatted inconveniencing","clinicianCodeId":94285,"clinicName":"Brigid factorizing","consentAcceptedOn":"1997-02-02 12:13:10 +0000","contactCellPhone":"Disinterested begun","contactEmail":"Ministration psychotic","contactHomePhone":"Commandeering undoes","contactName":"Awaited euphemistically","deactivatedOn":"1979-10-31 23:43:07 +0000","educationId":91345,"email":"oleta.carroll59@vaccinesurvey.com","expectedChildBirth":"2017-02-23","firstName":"Shirley","hasContactUsers":false,"homePhone":"Prohibitory storey","interventionGroup":"Networked Saxony","isDeactive":false,"lastName":"Heaney","parentRelationshipType":"Hypertension worshipping","parentUserId":68192,"password":"password","passwordConfirmation":"password","passwordDigest":"Wainscotting sharp","patientType":93834,"postalCode":"Exploitative collectivizing","raceId":78912,"reasonForDeactivation":"Disciplining trump","resetPassword":true,"role":"administrator","state":"Nutrient ahead","updatedUserProfile":false,"vaccinationReminders":false,"xSessionId":"Preconditioning snailing"},
};
_.forEach(_.keys(fakeUsers), function (key) {
  fakeUsers[key].isAdmin = function(){
    return false;
  };
});

describe('V2Setting', function() {
  
    beforeEach(function (done){
      agent = superagent.agent();
      objects = [];
var testObjects = [];
  testObjects.push({"awsHealthcareContentBucketName":"Lithest implementation","awsVideoBucketName":"Clerestories defoliants","contactUserRegistrationEmailText":"Deeding scantiness","contactUserRegistrationSubject":"Exact inters","forgotPasswordEmailText":"Shimmer philately","forgotPasswordSubject":"Overexposed overusing","fromEmail":"Naysayer alibied","smsPhoneNumber":"Cannibalistic Breckenridge","surveyCompletionEmailSubject":"Attucks dredges","surveyCompletionEmailText":"Mailed Summer","surveyNotificationEmailText":"Doled Lords","surveyNotificationFinalSmsText":"Mitch unauthenticated","surveyNotificationFirstReminderEmailText":"Comprehend quadriceps","surveyNotificationFirstReminderSubject":"Impotent superintendents","surveyNotificationSubject":"Foreswear proprietorship","termsAndConditions":"Carpetbagged facings"});
  testObjects.push({"awsHealthcareContentBucketName":"Cavorting ensconcing","awsVideoBucketName":"Semaphores muses","contactUserRegistrationEmailText":"Assam glistens","contactUserRegistrationSubject":"Characteristic disappointment","forgotPasswordEmailText":"Godfather advertisements","forgotPasswordSubject":"Laces thirstiest","fromEmail":"Ionizers hightailing","smsPhoneNumber":"Kindergarteners confectionery","surveyCompletionEmailSubject":"Oxidizing eruditely","surveyCompletionEmailText":"Monopolized gilding","surveyNotificationEmailText":"Kindergarteners malfunctioning","surveyNotificationFinalSmsText":"Contraception someone","surveyNotificationFirstReminderEmailText":"Charolais heavyweight","surveyNotificationFirstReminderSubject":"Scandalmongers miaows","surveyNotificationSubject":"Andes baize","termsAndConditions":"Villagers neutralized"});
  testObjects.push({"awsHealthcareContentBucketName":"Preservation sleazes","awsVideoBucketName":"Acculturation Murrow","contactUserRegistrationEmailText":"Pratfalls sackful","contactUserRegistrationSubject":"Nicobar elected","forgotPasswordEmailText":"Industrialism administrator","forgotPasswordSubject":"Revitalized claustrophobic","fromEmail":"Downhills Caucasian","smsPhoneNumber":"Berber gybed","surveyCompletionEmailSubject":"Abrasions Haman","surveyCompletionEmailText":"Tranquility multinational","surveyNotificationEmailText":"Gestapo illustrations","surveyNotificationFinalSmsText":"Reconditioned masticate","surveyNotificationFirstReminderEmailText":"Misconception inform","surveyNotificationFirstReminderSubject":"Specialization banjoes","surveyNotificationSubject":"Thundercloud Silva","termsAndConditions":"Misread questioningly"});
  testObjects.push({"awsHealthcareContentBucketName":"Cordoba indirection","awsVideoBucketName":"Rhyme Winthrop","contactUserRegistrationEmailText":"Recently pornographers","contactUserRegistrationSubject":"Conglomeration collocating","forgotPasswordEmailText":"Horny exhibited","forgotPasswordSubject":"Sagittariuses mouthpieces","fromEmail":"Specializations Whirlpool","smsPhoneNumber":"Enumerates defacing","surveyCompletionEmailSubject":"Integrate catalyze","surveyCompletionEmailText":"Countdowns decentralizing","surveyNotificationEmailText":"Ordure idealistically","surveyNotificationFinalSmsText":"Pungently miracles","surveyNotificationFirstReminderEmailText":"Industriousness obeisances","surveyNotificationFirstReminderSubject":"Dittoes telecommutes","surveyNotificationSubject":"Horticultural undistinguished","termsAndConditions":"Inefficiencies shucks"});
  testObjects.push({"awsHealthcareContentBucketName":"Generalization Yugoslav","awsVideoBucketName":"Proboscises eulogy","contactUserRegistrationEmailText":"Magically assassination","contactUserRegistrationSubject":"Painkillers wainscotted","forgotPasswordEmailText":"Falconer Ramses","forgotPasswordSubject":"Scroll ducats","fromEmail":"Impenetrability interdependence","smsPhoneNumber":"Rainier overwhelmingly","surveyCompletionEmailSubject":"Nevertheless sandboxes","surveyCompletionEmailText":"Reenlisting shortsightedly","surveyNotificationEmailText":"Phototypesetter swaggers","surveyNotificationFinalSmsText":"Sleepwalks neighborliness","surveyNotificationFirstReminderEmailText":"Unpronounceable preregistration","surveyNotificationFirstReminderSubject":"Improbabilities stabs","surveyNotificationSubject":"Arraigning lopping","termsAndConditions":"Upjohn nonprofessional"});
  testObjects.push({"awsHealthcareContentBucketName":"Insubordination simplifications","awsVideoBucketName":"Funks sorry","contactUserRegistrationEmailText":"Transsexual stray","contactUserRegistrationSubject":"Septuagenarians misidentifies","forgotPasswordEmailText":"Intertwining desperation","forgotPasswordSubject":"Justifiably eccentrics","fromEmail":"Typescripts Reginald","smsPhoneNumber":"Gorier shuttlecocking","surveyCompletionEmailSubject":"Sensationalist arithmetically","surveyCompletionEmailText":"Disintegrating shoaling","surveyNotificationEmailText":"Switched subprograms","surveyNotificationFinalSmsText":"Defections overcompensates","surveyNotificationFirstReminderEmailText":"Refurbishments sandcastles","surveyNotificationFirstReminderSubject":"Outlasting countersinking","surveyNotificationSubject":"Justifications Protagoras","termsAndConditions":"Overemphasized clambake"});
  testObjects.push({"awsHealthcareContentBucketName":"Stickups defamed","awsVideoBucketName":"Masochist Tibet","contactUserRegistrationEmailText":"Paragraphs gable","contactUserRegistrationSubject":"Untidier trouts","forgotPasswordEmailText":"Snoring primer","forgotPasswordSubject":"Collaborations caraways","fromEmail":"Ambassadorships counterfeiting","smsPhoneNumber":"Hurler contemporaries","surveyCompletionEmailSubject":"Materialization copulas","surveyCompletionEmailText":"Disassociating superabundant","surveyNotificationEmailText":"Establishments novelette","surveyNotificationFinalSmsText":"Guard unshakeable","surveyNotificationFirstReminderEmailText":"Guinea Derek","surveyNotificationFirstReminderSubject":"Christie pictures","surveyNotificationSubject":"Zoroastrianisms Shostakovitch","termsAndConditions":"Scary gratefully"});
  testObjects.push({"awsHealthcareContentBucketName":"Impersonally conviction","awsVideoBucketName":"Bunny congregations","contactUserRegistrationEmailText":"Doublet flesh","contactUserRegistrationSubject":"Tardily Neruda","forgotPasswordEmailText":"Metaphorically froths","forgotPasswordSubject":"Windpipes unobjectionable","fromEmail":"Particularities filet","smsPhoneNumber":"Vanishings disapprovingly","surveyCompletionEmailSubject":"Pleated transliterates","surveyCompletionEmailText":"Joyousness diversification","surveyNotificationEmailText":"Mendicants Rosenberg","surveyNotificationFinalSmsText":"Indiscriminate embryos","surveyNotificationFirstReminderEmailText":"Ungrammatical rebated","surveyNotificationFirstReminderSubject":"Flagellates uncompromising","surveyNotificationSubject":"Zeroing felling","termsAndConditions":"Regalia superstitiously"});
  testObjects.push({"awsHealthcareContentBucketName":"Abstainer dogmatically","awsVideoBucketName":"Slaughterhouses cockeyed","contactUserRegistrationEmailText":"Relationship purples","contactUserRegistrationSubject":"Restauranteur Tulane","forgotPasswordEmailText":"Improvisation jewels","forgotPasswordSubject":"Painlessly schoolteacher","fromEmail":"Aruba codifies","smsPhoneNumber":"Predicated broadcasting","surveyCompletionEmailSubject":"Masquerading stratagem","surveyCompletionEmailText":"Ticonderoga ramification","surveyNotificationEmailText":"Ambivalently compilation","surveyNotificationFinalSmsText":"Plackets narrowly","surveyNotificationFirstReminderEmailText":"Imprudence merchandizing","surveyNotificationFirstReminderSubject":"Larkspur cinematographer","surveyNotificationSubject":"Experimentation keenness","termsAndConditions":"Dehumanization bowling"});
  testObjects.push({"awsHealthcareContentBucketName":"Refunds byway","awsVideoBucketName":"Imperfects prodigy","contactUserRegistrationEmailText":"Italy randomizes","contactUserRegistrationSubject":"Theist subtitling","forgotPasswordEmailText":"Precautionary hypochondriacs","forgotPasswordSubject":"Incurables glamourizing","fromEmail":"Receding Roberta","smsPhoneNumber":"Overdraft astigmatism","surveyCompletionEmailSubject":"Dispatching wraiths","surveyCompletionEmailText":"Parthenogenesis reemerges","surveyNotificationEmailText":"Upbringings looped","surveyNotificationFinalSmsText":"Authoritatively negated","surveyNotificationFirstReminderEmailText":"Josie major","surveyNotificationFirstReminderSubject":"Tumbling sympathetically","surveyNotificationSubject":"Lelia Liverpool","termsAndConditions":"Expires enrichment"});

V2Setting.createEach(testObjects).exec(function(err, obj) {
  obj.forEach(function(element) {
    objects.push(element);
  });
  assert(! err, "Received error " + util.inspect(err));

  if (objects.length === testObjects.length) {
    done();
  }
});

    });

    afterEach(function(done) {
      passportStub.logout();
      V2Setting.destroy().exec(function(err, result) {
  assert(! err, "Received error " + util.inspect(err, {depth: null}));
});

      done();
    });
  

  before(function() {
    // Drop existing collections
    
      adapter.drop('memory', 'clinic_block_randomizer', [], function() {})
    
      adapter.drop('memory', 'clinician_codes', [], function() {})
    
      adapter.drop('memory', 'educations', [], function() {})
    
      adapter.drop('memory', 'healthcare_provider_contents', [], function() {})
    
      adapter.drop('memory', 'job_audit_logging', [], function() {})
    
      adapter.drop('memory', 'question_categories', [], function() {})
    
      adapter.drop('memory', 'question_codes', [], function() {})
    
      adapter.drop('memory', 'question_types', [], function() {})
    
      adapter.drop('memory', 'races', [], function() {})
    
      adapter.drop('memory', 'search_audit_logging', [], function() {})
    
      adapter.drop('memory', 'SendGrid', [], function() {})
    
      adapter.drop('memory', 'settings', [], function() {})
    
      adapter.drop('memory', 'surveys', [], function() {})
    
      adapter.drop('memory', 'survey_answers', [], function() {})
    
      adapter.drop('memory', 'survey_questions', [], function() {})
    
      adapter.drop('memory', 'survey_question_skip_logic', [], function() {})
    
      adapter.drop('memory', 'topics', [], function() {})
    
      adapter.drop('memory', 'Twilio', [], function() {})
    
      adapter.drop('memory', 'users', [], function() {})
    
      adapter.drop('memory', 'user_audit_logging', [], function() {})
    
      adapter.drop('memory', 'user_surveys', [], function() {})
    
      adapter.drop('memory', 'user_survey_answers', [], function() {})
    
      adapter.drop('memory', 'user_survey_videos', [], function() {})
    
      adapter.drop('memory', 'vaccination_reminders', [], function() {})
    
      adapter.drop('memory', 'videos', [], function() {})
    
      adapter.drop('memory', 'video_audit_logging', [], function() {})
    
    // Recreate collections
    
      adapter.define('memory', 'clinic_block_randomizer', V2ClinicianBlockRandomizer.attributes, function() {})
    
      adapter.define('memory', 'clinician_codes', V2ClinicianCode.attributes, function() {})
    
      adapter.define('memory', 'educations', V2Education.attributes, function() {})
    
      adapter.define('memory', 'healthcare_provider_contents', V2HealthcareProviderContent.attributes, function() {})
    
      adapter.define('memory', 'job_audit_logging', V2JobAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'question_categories', V2QuestionCategory.attributes, function() {})
    
      adapter.define('memory', 'question_codes', V2QuestionCode.attributes, function() {})
    
      adapter.define('memory', 'question_types', V2QuestionType.attributes, function() {})
    
      adapter.define('memory', 'races', V2Race.attributes, function() {})
    
      adapter.define('memory', 'search_audit_logging', V2SearchAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'SendGrid', V2SendGrid.attributes, function() {})
    
      adapter.define('memory', 'settings', V2Setting.attributes, function() {})
    
      adapter.define('memory', 'surveys', V2Survey.attributes, function() {})
    
      adapter.define('memory', 'survey_answers', V2SurveyAnswer.attributes, function() {})
    
      adapter.define('memory', 'survey_questions', V2SurveyQuestion.attributes, function() {})
    
      adapter.define('memory', 'survey_question_skip_logic', V2SurveyQuestionSkipLogic.attributes, function() {})
    
      adapter.define('memory', 'topics', V2Topic.attributes, function() {})
    
      adapter.define('memory', 'Twilio', V2Twilio.attributes, function() {})
    
      adapter.define('memory', 'users', V2User.attributes, function() {})
    
      adapter.define('memory', 'user_audit_logging', V2UserAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'user_surveys', V2UserSurvey.attributes, function() {})
    
      adapter.define('memory', 'user_survey_answers', V2UserSurveyAnswer.attributes, function() {})
    
      adapter.define('memory', 'user_survey_videos', V2UserSurveyVideo.attributes, function() {})
    
      adapter.define('memory', 'vaccination_reminders', V2VaccinationReminder.attributes, function() {})
    
      adapter.define('memory', 'videos', V2Video.attributes, function() {})
    
      adapter.define('memory', 'video_audit_logging', V2VideoAuditLogging.attributes, function() {})
    
  });

  
  
    it('should attempt to get index of settings for patient', function (done) {
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/settings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create setting for patient', function (done) {
      var newObj = {"aws_healthcare_content_bucket_name":"Picks nauseating","aws_video_bucket_name":"Sensibility emulsifies","contact_user_registration_email_text":"Daguerreotyping watermarks","contact_user_registration_subject":"Mission sultanate","forgot_password_email_text":"Reinstatement troubleshooters","forgot_password_subject":"Levers discouragingly","from_email":"Hesitant cabin","sms_phone_number":"Graceful lands","survey_completion_email_subject":"Accessible being","survey_completion_email_text":"Brokenhearted comma","survey_notification_email_text":"Thessalonian raves","survey_notification_final_sms_text":"Equalization cause","survey_notification_first_reminder_email_text":"Interrogating misinformation","survey_notification_first_reminder_subject":"Peelings computationally","survey_notification_subject":"Buffaloing proms","terms_and_conditions":"Classifying unceremonious"};
  
      passportStub.login(fakeUsers['patient']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/settings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show setting for patient', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/settings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update setting for patient', function (done) {
      var id = objects[0].id;
      var newObj = {"aws_healthcare_content_bucket_name":"Hologram mackerel","aws_video_bucket_name":"Nightingales prophetess","contact_user_registration_email_text":"Cliques ideal","contact_user_registration_subject":"Acclimatizing proliferating","forgot_password_email_text":"Spiky reveres","forgot_password_subject":"Multicolored hallucinogenics","from_email":"Uncooperative misapprehending","sms_phone_number":"Contemptuous memorializing","survey_completion_email_subject":"Exhibitionists decompressed","survey_completion_email_text":"Merritt sororities","survey_notification_email_text":"Unstructured reupholstering","survey_notification_final_sms_text":"Rebuses contraptions","survey_notification_first_reminder_email_text":"Questioningly uninhabitable","survey_notification_first_reminder_subject":"Piffle cancers","survey_notification_subject":"Flawlessly throw","terms_and_conditions":"Export indispositions"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/settings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to destroy setting for patient', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['patient']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/settings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
    it('should attempt to get index of settings for administrator', function (done) {
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/settings").set('Content-Type', 'application/json').end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 200);
        assert.equal(res.body.length, 10);
        done(err);
  
      });
    });

    it('should attempt to create setting for administrator', function (done) {
      var newObj = {"aws_healthcare_content_bucket_name":"Empires aniseed","aws_video_bucket_name":"Whitening chlorinated","contact_user_registration_email_text":"Unknowing overproduction","contact_user_registration_subject":"Libertines buckles","forgot_password_email_text":"Bacteriological corkscrewing","forgot_password_subject":"Dresses indication","from_email":"Understandings transnationals","sms_phone_number":"Cherished topographic","survey_completion_email_subject":"Videotaping misfortunes","survey_completion_email_text":"Psychotherapies misapprehending","survey_notification_email_text":"Skirmishes uppercase","survey_notification_final_sms_text":"Exude unhand","survey_notification_first_reminder_email_text":"Minions turgidity","survey_notification_first_reminder_subject":"Apprenticeships raffled","survey_notification_subject":"Hypoallergenic substantiation","terms_and_conditions":"Nevis discommode"};
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.post("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/settings").send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

    it('should attempt to show setting for administrator', function(done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.get("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/settings/" + id).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 200);
        done(err);
  
      });
    });

    it('should attempt to update setting for administrator', function (done) {
      var id = objects[0].id;
      var newObj = {"aws_healthcare_content_bucket_name":"Countrywoman superintendent","aws_video_bucket_name":"Overseeing celebrations","contact_user_registration_email_text":"Prostitute dominantly","contact_user_registration_subject":"Gilberto psychologically","forgot_password_email_text":"Jerold circuiting","forgot_password_subject":"Inappropriately undercoats","from_email":"Infotainment oxidizer","sms_phone_number":"Dissolving overextending","survey_completion_email_subject":"Musky sodium","survey_completion_email_text":"Cowboy trustworthier","survey_notification_email_text":"Insignificance Americanized","survey_notification_final_sms_text":"Crunched differentiated","survey_notification_first_reminder_email_text":"Ascertainable huntresses","survey_notification_first_reminder_subject":"Flirtatiously offshoot","survey_notification_subject":"Farmyards indivisibility","terms_and_conditions":"Grazes surreptitiously"};
      newObj.id = id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.put("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/settings/" + id).send(newObj).set('Content-Type', 'application/json').end(function (err, res) {
  
        if (err) return done(err);
        assert.equal(res.status, 204);
        
          V2Setting.findOne({id: id}).exec(function(err, obj) {
            if (err) return done(err);
            assert(obj, 'Expected to get V2Setting with id ' + id);
            done();
          });
        
  
      });
    });

    it('should attempt to destroy setting for administrator', function (done) {
      var id = objects[0].id;
  
      passportStub.login(fakeUsers['administrator']);
  
      agent.del("http://localhost:" + (process.env.TEST_PORT || 1337) + "/api/v2/settings/" + id).end(function (err, res) {
        if (err) return done(err);
  
        assert.equal(res.status, 403);
        done(err);
  
      });
    });

  
  
});
