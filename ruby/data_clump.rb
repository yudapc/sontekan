class DateRange < Struct.new(:start_date, :end_date)
  def include?(date)
    (start_date..end_date).cover?(date)
  end
end

class Order < OpenStruct
  def place_between?(date_range)
    date_range.include?(place_at)
  end
end
