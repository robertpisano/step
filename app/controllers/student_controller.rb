class StudentController < ApplicationController
  def show
    user = User.students.find(params[:student_id])
    render :json => user.to_json
  end
end
