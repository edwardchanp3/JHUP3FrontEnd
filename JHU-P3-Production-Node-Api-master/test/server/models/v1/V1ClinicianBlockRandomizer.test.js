  var assert = require('assert');
var adapter = require('sails-memory');
var _ = require('lodash');


describe('V1ClinicianBlockRandomizer Model', function() {

  afterEach(function() {
    V1ClinicianBlockRandomizer.destroy();
  });

  beforeEach(function() {
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
    
      adapter.drop('memory', 'vaccination_reminders', [], function() {})
    
      adapter.drop('memory', 'videos', [], function() {})
    
      adapter.drop('memory', 'video_audit_logging', [], function() {})
    
    // Recreate collections
    
      adapter.define('memory', 'clinic_block_randomizer', V1ClinicianBlockRandomizer.attributes, function() {})
    
      adapter.define('memory', 'clinician_codes', V1ClinicianCode.attributes, function() {})
    
      adapter.define('memory', 'educations', V1Education.attributes, function() {})
    
      adapter.define('memory', 'healthcare_provider_contents', V1HealthcareProviderContent.attributes, function() {})
    
      adapter.define('memory', 'job_audit_logging', V1JobAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'question_categories', V1QuestionCategory.attributes, function() {})
    
      adapter.define('memory', 'question_codes', V1QuestionCode.attributes, function() {})
    
      adapter.define('memory', 'question_types', V1QuestionType.attributes, function() {})
    
      adapter.define('memory', 'races', V1Race.attributes, function() {})
    
      adapter.define('memory', 'search_audit_logging', V1SearchAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'SendGrid', V1SendGrid.attributes, function() {})
    
      adapter.define('memory', 'settings', V1Setting.attributes, function() {})
    
      adapter.define('memory', 'surveys', V1Survey.attributes, function() {})
    
      adapter.define('memory', 'survey_answers', V1SurveyAnswer.attributes, function() {})
    
      adapter.define('memory', 'survey_questions', V1SurveyQuestion.attributes, function() {})
    
      adapter.define('memory', 'survey_question_skip_logic', V1SurveyQuestionSkipLogic.attributes, function() {})
    
      adapter.define('memory', 'topics', V1Topic.attributes, function() {})
    
      adapter.define('memory', 'Twilio', V1Twilio.attributes, function() {})
    
      adapter.define('memory', 'users', V1User.attributes, function() {})
    
      adapter.define('memory', 'user_audit_logging', V1UserAuditLogging.attributes, function() {})
    
      adapter.define('memory', 'user_surveys', V1UserSurvey.attributes, function() {})
    
      adapter.define('memory', 'user_survey_answers', V1UserSurveyAnswer.attributes, function() {})
    
      adapter.define('memory', 'vaccination_reminders', V1VaccinationReminder.attributes, function() {})
    
      adapter.define('memory', 'videos', V1Video.attributes, function() {})
    
      adapter.define('memory', 'video_audit_logging', V1VideoAuditLogging.attributes, function() {})
    
  });

  it('should successfully create an instance of V1ClinicianBlockRandomizer', function(done) {
    var beforeCount;

    V1ClinicianBlockRandomizer.count()
      .then(function(count) {
        beforeCount = count;
        return V1ClinicianBlockRandomizer.create({"id":31970,"clinicianCodeId":90946,"interventionGroup":"Lambasts amphibious","patientType":"Pageant parishes"});
      })
      .then(function(obj) {
        assert(obj, 'Failed to create object.');
        return V1ClinicianBlockRandomizer.count();
      })
      .then(function(count) {
        assert(count > beforeCount, 'Expected create to increase object count.');
        done();
      })
      .catch(function (exception) {
        done(exception);
      });
  });

  it('should successfully read an instance of V1ClinicianBlockRandomizer', function(done) {

    var attributes = {"id":69215,"clinicianCodeId":51011,"interventionGroup":"Sillier vociferate","patientType":"Sparring cinematographer"};
    var id;

    if (attributes && Object.keys(attributes).length !== 0) {
      V1ClinicianBlockRandomizer.findOne(attributes)
        .then(function(record) {
          assert(!record, 'Should not have found a record.');
          return V1ClinicianBlockRandomizer.create(attributes);
        })
        .then(function(obj) {
          assert(obj, 'Failed to create object.');
          id = obj.id;
          return V1ClinicianBlockRandomizer.findOne({'id':obj.id});
        })
        .then(function(obj) {
          assert(obj, 'Expected to find a model with id ' + id + '.');
          done();
        })
        .catch(function (exception) {
          done(exception);
        });
      } else {
        done();
      }
  });

  it('should successfully update an instance of V1ClinicianBlockRandomizer', function(done) {
    var attributes = {"id":6701,"clinicianCodeId":42377,"interventionGroup":"Crossbow twang","patientType":"Hodgepodge trisected"};
    var updatedObject;

    V1ClinicianBlockRandomizer.create(attributes)
      .then(function(obj) {
        assert(obj, 'Failed to create object.');
        var attributes = {"clinicianCodeId":42039,"interventionGroup":"Killings humidifies","patientType":"Pious dislodge"};
        return V1ClinicianBlockRandomizer.update(obj.id, attributes);
      })
      .then(function(collection) {
        updatedObject = collection[0];
        assert(updatedObject, 'Failed to update object.');
        return V1ClinicianBlockRandomizer.findOne({'id':updatedObject.id});
      })
      .then(function(obj) {
        assert(obj.id === updatedObject.id, 'Expected to find the instance just created.');
        done();
      })
      .catch(function (exception) {
        done(exception);
      });
  });

  it('should successfully destroy an instance of V1ClinicianBlockRandomizer', function(done) {

    var attributes = {"id":60097,"clinicianCodeId":43194,"interventionGroup":"Spiritless impressionists","patientType":"Essentially conks"};

    if (attributes && Object.keys(attributes).length !== 0) {
      V1ClinicianBlockRandomizer.findOne(attributes)
        .then(function(record) {
          assert(!record, 'Should not have found a record.');
          return V1ClinicianBlockRandomizer.create(attributes);
        })
        .then(function(obj) {
          assert(obj, 'Failed to create object.');
          return V1ClinicianBlockRandomizer.destroy(obj.id);
        })
        .then(function(collection) {
          assert(collection.length === 1, 'Expected to destroy the instance just created.');
          done();
        })
        .catch(function (exception) {
          done(exception);
        });
      } else{
          done();
      }
  });
  
  

  
  describe('custom callbacks', function() {
    it('should have a callbacks object', function() {
      assert(V1ClinicianBlockRandomizer.callbacks, 'V1ClinicianBlockRandomizer is missing the callbacks object');
    });

    
      

      it('should contain "beforeCreate" callback', function() {
        assert(V1ClinicianBlockRandomizer.callbacks['beforeCreate'], 'beforeCreate is missing.');
      });

      it('"beforeCreate" callback should be a function', function() {
      assert(_.isFunction(V1ClinicianBlockRandomizer.callbacks['beforeCreate']), 'beforeCreate should be a function.');
    });
    
      

      it('should contain "afterCreate" callback', function() {
        assert(V1ClinicianBlockRandomizer.callbacks['afterCreate'], 'afterCreate is missing.');
      });

      it('"afterCreate" callback should be a function', function() {
      assert(_.isFunction(V1ClinicianBlockRandomizer.callbacks['afterCreate']), 'afterCreate should be a function.');
    });
    
      

      it('should contain "beforeFind" callback', function() {
        assert(V1ClinicianBlockRandomizer.callbacks['beforeFind'], 'beforeFind is missing.');
      });

      it('"beforeFind" callback should be a function', function() {
      assert(_.isFunction(V1ClinicianBlockRandomizer.callbacks['beforeFind']), 'beforeFind should be a function.');
    });
    
      

      it('should contain "afterFind" callback', function() {
        assert(V1ClinicianBlockRandomizer.callbacks['afterFind'], 'afterFind is missing.');
      });

      it('"afterFind" callback should be a function', function() {
      assert(_.isFunction(V1ClinicianBlockRandomizer.callbacks['afterFind']), 'afterFind should be a function.');
    });
    
      

      it('should contain "beforeUpdate" callback', function() {
        assert(V1ClinicianBlockRandomizer.callbacks['beforeUpdate'], 'beforeUpdate is missing.');
      });

      it('"beforeUpdate" callback should be a function', function() {
      assert(_.isFunction(V1ClinicianBlockRandomizer.callbacks['beforeUpdate']), 'beforeUpdate should be a function.');
    });
    
      

      it('should contain "afterUpdate" callback', function() {
        assert(V1ClinicianBlockRandomizer.callbacks['afterUpdate'], 'afterUpdate is missing.');
      });

      it('"afterUpdate" callback should be a function', function() {
      assert(_.isFunction(V1ClinicianBlockRandomizer.callbacks['afterUpdate']), 'afterUpdate should be a function.');
    });
    
      

      it('should contain "beforeDestroy" callback', function() {
        assert(V1ClinicianBlockRandomizer.callbacks['beforeDestroy'], 'beforeDestroy is missing.');
      });

      it('"beforeDestroy" callback should be a function', function() {
      assert(_.isFunction(V1ClinicianBlockRandomizer.callbacks['beforeDestroy']), 'beforeDestroy should be a function.');
    });
    
      

      it('should contain "afterDestroy" callback', function() {
        assert(V1ClinicianBlockRandomizer.callbacks['afterDestroy'], 'afterDestroy is missing.');
      });

      it('"afterDestroy" callback should be a function', function() {
      assert(_.isFunction(V1ClinicianBlockRandomizer.callbacks['afterDestroy']), 'afterDestroy should be a function.');
    });
    
      
      
      
      
      
      
      
      
      
      
      
      
  });
});

