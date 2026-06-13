import urllib.request
import urllib.parse
import re
import os
import shutil

def download_high_res_google_image(url_string, output_path):
    print(f"Parsing Google Maps URL to find image source...")
    # Decode URL to handle encoded characters
    decoded_url = urllib.parse.unquote(url_string)
    
    # Regular expression to find the googleusercontent URL
    # Look for lh3.googleusercontent.com links
    match = re.search(r'(https://lh3\.googleusercontent\.com/[^\s&!|?#]+)', decoded_url)
    
    if match:
        base_img_url = match.group(1)
        # Modify the suffix to fetch the high-resolution (s1600) original image
        # Google usercontent URLs let you change the resolution dynamically by changing =w...-h...-k-no to =s1600
        high_res_url = base_img_url.split('=')[0] + '=s1600'
        
        print(f"Downloading high-res image from: {high_res_url}")
        
        # User-Agent header to prevent HTTP 403 Forbidden errors
        req = urllib.request.Request(
            high_res_url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        )
        
        with urllib.request.urlopen(req) as response:
            with open(output_path, 'wb') as out_file:
                shutil.copyfileobj(response, out_file)
        print(f"Successfully saved to {output_path}!")
        return True
    else:
        print("Failed to find googleusercontent URL in maps link.")
        return False

if __name__ == "__main__":
    assets_dir = "/Users/mekrua/black-fitness/assets"
    
    # 1. Google Maps URLs provided by the user
    urls = [
        # Photo 1
        "https://www.google.com/maps/place/Black+Fitness+%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B8%AD%E0%B8%993/@13.6848786,100.3827465,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhBvOAOvUw89QR0kT5A6HJM8!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAHTcLIKLFMx5uHIRyQQZeCzVT5rYFk8Y66gztsiudFzXYYs8lHzkyskqCKs8q9_HbaMQFu1D-UpqasXTTLsFKeQAl5Gxr9A9K3mzO78o1fjDiIVsNKHyLjHs6xUoiZtxp6qfwfVprSLAzqu%3Dw203-h152-k-no!7i4032!8i3024!4m9!3m8!1s0x30e2bd24f96ef0a9:0x42454026b6023375!8m2!3d13.6849151!4d100.383146!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11yp8wdpj8?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D#",
        # Photo 2
        "https://www.google.com/maps/place/Black+Fitness+%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B8%AD%E0%B8%993/@13.6849151,100.383146,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhB9_66-i0XKt0-h4x2jAGcu!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAEkNP-e5pQilZFuGyp4CZYb09gtYbaltSmRK3nNkZ6Wykh7tbNNYFrlR9iaKPQ7djU5QNvVDL6FCZqA2LJ2QpRtEgzK1CGmQ_5j5BfAu8Y4r3DrXJP72GfG8yCLXJGNdzIEuY4I6Ob64Vog%3Dw203-h152-k-no!7i5712!8i4284!4m9!3m8!1s0x30e2bd24f96ef0a9:0x42454026b6023375!8m2!3d13.6849151!4d100.383146!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11yp8wdpj8?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D#",
        # Photo 3
        "https://www.google.com/maps/place/Black+Fitness+%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B8%AD%E0%B8%993/@13.6848786,100.3827465,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhAUQO2S6sLD2W7ef--IyQT9!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAGAIY5RdmdMQvsQDQlQLFQGrtaS5DAUrldL3cnB0XOvWPaLqz8w0Qm77SjkSUkxxLmX47RXbPbAvh8TpS7NQwo-NlDj-4iQeLbXuC2IEG-wehpnLsJi2cnItfh1no0BM15gP5YboPo3ziGW%3Dw203-h152-k-no!7i1920!8i1440!4m9!3m8!1s0x30e2bd24f96ef0a9:0x42454026b6023375!8m2!3d13.6849151!4d100.383146!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11yp8wdpj8?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D#",
        # Photo 4
        "https://www.google.com/maps/place/Black+Fitness+%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B8%AD%E0%B8%993/@13.6848786,100.3827465,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhBU743LhO4ubKsJCcWzegcC!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAFI2ecWIcjkjDn6DSIh7RzyAUDGKPyNy_0t0jeI3-0mLa0CySfqCkCe1k7_niEGnpFACyNm2D7umTYngXmFp62iaHvMWo-dAysbyPE87ArxH87BpIopN7SxpxFKx6Ty5zRUlnHIICt8v68%3Dw203-h152-k-no!7i5712!8i4284!4m9!3m8!1s0x30e2bd24f96ef0a9:0x42454026b6023375!8m2!3d13.6849151!4d100.383146!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11yp8wdpj8?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D#",
        # Photo 5
        "https://www.google.com/maps/place/Black+Fitness+%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B8%AD%E0%B8%993/@13.6849151,100.383146,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhBdcIDehTrduPDO-t4BNDpG!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAGGjRSymX1ANXu7ZgBOpMlpN00TJMD8FzkXt-MGTxj3AyAVZlh1vxmR-6n8Ub9W0NGnW4FqDQ5Y-hhwBqTY7TtTf-LblLgIqbPjNTud67MtUWshe1fVp1ALAUXZx7cA_BLsuECBzA6xDZVg%3Dw203-h270-k-no!7i4284!8i5712!4m9!3m8!1s0x30e2bd24f96ef0a9:0x42454026b6023375!8m2!3d13.6849151!4d100.383146!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11yp8wdpj8?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D#"
    ]

    # Download each Google photo
    for idx, url in enumerate(urls, start=4):
        out_name = f"bangbon_{idx}.jpg"
        out_path = os.path.join(assets_dir, out_name)
        download_high_res_google_image(url, out_path)
        
    # 2. Copy the new image downloaded by the user in the Downloads folder (บางบอน3-3.jpg)
    src_download_path = "/Users/mekrua/Downloads/บางบอน3-3.jpg"
    dest_path = os.path.join(assets_dir, "bangbon_3.jpg")
    
    if os.path.exists(src_download_path):
        print(f"Copying {src_download_path} -> {dest_path}")
        shutil.copy(src_download_path, dest_path)
        print("Done!")
    else:
        print(f"Warning: {src_download_path} not found in Downloads.")
