var prompt = require('prompt');

function student(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase){
  this.name = name;
  this.gender = gender,
  this.grade = grade;
  this.gpa = gpa;
  this.detentions = detentions
  this.sleepingInClass = sleepingInClass;
  this.catchPhrase = catchPhrase;

  this.canStudentHaveFun = function(){
    if ((this.detentions > 10) && (this.gpa < 2)) {
      console.log("student cannot have fun, ");
    } else {
      console.log("Don't have a cow man..., " + this.catchPhrase);
    }
  }
}


prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){
  var student = new Student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);
  var student2 = new Student2(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);
  student.canStudentHaveFun();
  console.log("************************************************************************")
  student2.canStudentHaveFun();
});