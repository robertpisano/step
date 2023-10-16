class CoachController < ApplicationController
  def index
    coaches = User.coaches
    render :json => coaches.to_json
  end

  def show
    coach = User.coaches.find(params["coach_id"])

    render :json => coach.to_json
  end
end
