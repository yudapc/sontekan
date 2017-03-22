class Car
  def initialize(merk)
    @merk ||= merk
  end

  def detail
    puts @merk
  end

  def self.get_merk
    puts @merk
  end
end

car = Car.new('toyota')
car.detail

Car.get_merk
