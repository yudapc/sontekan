def selisih(start, finish)
  selisih_menit = (finish - start) / 60
  if selisih_menit > 60
    jam = (selisih_menit / 60).round(1)
    "#{jam} jam"
  else
    "#{selisih_menit} menit"
  end
end

start = Time.new 2016, 3, 11, 8, 20
finish = Time.new 2016, 3, 11, 9, 30
puts selisih(start, finish)