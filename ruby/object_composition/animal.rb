module Animal
  def run
    puts "He will run..."
  end

  def male?
    @sex.present? && @sex == "male"
  end

  def female?
    @sex.present? && @sex == "female"
  end
end
