class MeetingsController < ApplicationController
  def index
    meetings = Meeting.where(coach_id: params["user_id"]).includes(:coach, :student)
    
    resp = meetings.map do |meeting|
      {
        id: meeting.id,
        student: meeting.student.as_json,
        coach: meeting.coach.as_json,
        start_datetime: meeting.start_datetime.iso8601,
        end_datetime: meeting.end_datetime.iso8601,
        review: meeting.review_id
      }
    end

    render :json => resp.as_json
  end

  def create
    result = JSON.parse(request.body.string)
    
    meeting = Meeting.new(
      coach_id: result["coach_id"],
      start_datetime: Time.parse(result["start_datetime"]),
      end_datetime: Time.parse(result["start_datetime"]) + 2.hours
    )
    meeting.save!
    
    render :json => meeting.as_json
  end

  def update
    result = JSON.parse(request.body.string)

    meeting = Meeting.find(params["meeting_id"])
    meeting.student_id = result["student_id"]

    meeting.save!

    render :json => meeting.to_json
  end
end
