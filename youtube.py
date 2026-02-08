import subprocess
import json
import os
import re

def get_playlist_data(playlist_url):
    """Fetch playlist metadata using yt-dlp."""
    cmd = [
        'python', '-m', 'yt_dlp',
        '--flat-playlist',
        '--dump-single-json',
        playlist_url
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        raise RuntimeError(result.stderr)
    data = json.loads(result.stdout)
    return data.get('title', 'Playlist'), data.get('entries', [])

def download_subtitles(video_url, output_dir='subs'):
    """Download auto English subtitles using yt-dlp."""
    os.makedirs(output_dir, exist_ok=True)
    cmd = [
        'python', '-m', 'yt_dlp',
        '--skip-download',
        '--write-auto-sub',
        '--sub-lang', 'en',
        '--sub-format', 'vtt',
        '-o', os.path.join(output_dir, '%(id)s.%(ext)s'),
        video_url
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Warning: Failed to download subtitles for {video_url}")
        return None

    # yt-dlp saves the file as VIDEO_ID.vtt
    video_id = video_url.split('v=')[-1]
    return os.path.join(output_dir, f"{video_id}.vtt")

def vtt_to_text(vtt_path):
    """Convert a .vtt subtitle file to plain text."""
    if not vtt_path or not os.path.exists(vtt_path):
        return "[Transcript unavailable]"

    with open(vtt_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Remove timing lines and blank lines
    text_lines = [line.strip() for line in lines if line.strip() and not re.match(r'\d{2}:\d{2}:\d{2}\.\d{3}', line)]
    return ' '.join(text_lines)

def save_consolidated_transcripts(playlist_url):
    playlist_title, videos = get_playlist_data(playlist_url)
    filename = f"{playlist_title.replace(' ', '_')}_combined.txt"

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(f"PLAYLIST: {playlist_title}\n")
        f.write("=" * 50 + "\n\n")

        for video in videos:
            video_id = video.get('id')
            video_title = video.get('title') or video_id
            video_url = f"https://www.youtube.com/watch?v={video_id}"

            print(f"Fetching subtitles: {video_title}")
            f.write(f"VIDEO: {video_title}\n")
            f.write(f"URL: {video_url}\n\n")

            # Download subtitles and convert to text
            vtt_file = download_subtitles(video_url)
            text = vtt_to_text(vtt_file)
            f.write(text + "\n\n")
            f.write("-" * 50 + "\n\n")

    print(f"Saved consolidated transcripts to {filename}")

# Example usage
save_consolidated_transcripts("https://www.youtube.com/playlist?list=PL8dPuuaLjXtOAKed_MxxWBNaPno5h3Zs8")
