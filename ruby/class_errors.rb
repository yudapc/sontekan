class Pulpen
  def initialize(warna, tinta)
    @warna ||= warna
    @tinta ||= tinta
  end

  def spek
    raise "pulpen errors" if @warna.empty? || @tinta.empty?
    "Warna: #{@warna} & Tinta: #{@tinta}"
  end
end

# example error handling
def pulpen_errors
  pulpen = Pulpen.new('', 'hitam')
  begin
    puts pulpen.spek
  rescue => e
    puts e
  end
end

pulpen_errors #call method
