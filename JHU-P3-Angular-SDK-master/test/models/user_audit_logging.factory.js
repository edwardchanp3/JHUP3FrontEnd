(function(module, inject, angular) {

  var expect = chai.expect;

  describe("Model Service - $userAuditLogging", function() {
    var model, config;

    beforeEach(module("VaccineSurveySdk.config"));
    beforeEach(module("VaccineSurveySdk.models"));

    beforeEach(inject(function($injector) {
      config = $injector.get("$vaccineSurveySdkConfig");
      model = $injector.get("$userAuditLogging");

      config.mockServer.enable();
    }));

    it("should exist", function() {
      expect(model).to.exist;
    });

    it("should be able to create an instance", function() {
      var instance = model.create({
        
        
        ip_address: undefined,
          
        
        logged_in_at: undefined,
          
        
        logged_out_at: undefined,
          
        
        user_agent: undefined,
          
        
        user_id: undefined,
          
        
      });
      instance.$save().then(function(savedInstance) {
        expect(savedInstance.id).to.exist;
      });
    });

    it("should be able to delete an instance", function() {
      var succesSpy = sinon.spy(function() {
        expect(successSpy.calledOnce).to.be.true;
      });
      model.delete({id: 1}).then(succesSpy);
    });

    
    describe("Query Scope - all", function() {
      it("should exist", function() {
        expect(model).to.respondTo("all");
      });

      
      it("should return an array of instances", function() {
        var result = model.all();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.all({}, successSpy);
      });
    });
    
    describe("Query Scope - exact_match", function() {
      it("should exist", function() {
        expect(model).to.respondTo("exact_match");
      });

      
      it("should return an array of instances", function() {
        var result = model.exact_match();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.exact_match({}, successSpy);
      });
    });
    
    describe("Query Scope - count", function() {
      it("should exist", function() {
        expect(model).to.respondTo("count");
      });

      

      
      it("should return an object with a value", function() {
        var result = model.count();
        expect(result).to.be.an.instanceof(Object);
        expect(result.value).to.exist;
      });
      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.count({}, successSpy);
      });
    });
    
    describe("Query Scope - count_exact_match", function() {
      it("should exist", function() {
        expect(model).to.respondTo("count_exact_match");
      });

      

      
      it("should return an object with a value", function() {
        var result = model.count_exact_match();
        expect(result).to.be.an.instanceof(Object);
        expect(result.value).to.exist;
      });
      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.count_exact_match({}, successSpy);
      });
    });
    
    describe("Query Scope - user_audit_export", function() {
      it("should exist", function() {
        expect(model).to.respondTo("user_audit_export");
      });

      
      it("should return an array of instances", function() {
        var result = model.user_audit_export();
        expect(result).to.be.an.instanceof(Array);
        expect(result.length).to.be.at.least(1);
        expect(result[0].id).to.exist;
      });
      

      

      it("should accept success callbacks", function() {
        var successSpy = sinon.spy(function() {
          expect(succesSpy.calledOnce).to.be.true;
        });
        model.user_audit_export({}, successSpy);
      });
    });
    

    
    
      describe("Relationship - Belongs To - User", function() {

        it("should have a method to get its owner instance", function() {
          var instance = model.create({
            user_id: "1"
          });
          instance.$related.user(function(result) {
            expect(result).to.be.an.instanceof(Array);
          });
        });

      });
    
    

    

    
  });

})(window.module, window.inject, angular);
