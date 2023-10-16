type Meeting = {
  id: number,
  student: User | null,
  coach: User | null,
  start_dtime: Date,
  end_dtime: Date,
  review: number | null
}