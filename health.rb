def health_data
  entries = get_file.strip.split("- - - - -")

  labels = []
  data = []

  entries.each do |entry|
    labels << entry.match(/%(.*)/m)[1].strip
    data << entry.match(/Weight:\s(.{6})/)[1].to_f
  end
  
  { labels: labels, 
    datasets: [
      fillColor: "rgba(220,220,220,0.5)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "transparent",
      pointStrokeColor: "#fff",
      data: data
    ]
  }.to_json
end

private

def get_file
  url = "https://dl.dropboxusercontent.com/s/vpmqkx5ifnb4ler/new_body_scale_mea"
  url << "surement.txt?token_hash=AAH_6jnAkbb8UH_D38cQPPZfxHu5VnuakkO5AnxMCFfrtg"

  uri = URI(url)
  file =  Net::HTTP.get(uri)
end