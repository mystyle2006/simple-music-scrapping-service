export const melonMusicScrapHtmlStub = `<div class="service_list_song type02 d_song_list">
\t\t<h3 class="none"></h3>
\t\t<!-- 곡리스트 테이블 -->

\t\t
\t\t\t\t<div class="wrap_btn_tb top">
\t\t\t\t\t
\t\t\t\t\t\t<button type="button" title="셔플듣기" class="button_rbox" onclick="playShuffleChart();"><span class="button_icons shuffle"></span><span class="cnt">셔플듣기</span></button>
\t\t\t\t\t\t<button type="button" title="전체듣기" class="button_rbox" onclick="playChart();"><span class="button_icons type02 play"></span><span class="cnt">전체듣기</span></button>
\t\t\t\t\t
\t\t\t\t\t<button type="button" title="선택된 곡 듣기" class="button_rbox" onclick="melon.play.playFormSong('1000002721','frm');"><span class="button_icons type02 play"></span><span class="cnt">듣기</span></button>
\t\t\t\t\t<button type="button" title="선택된 곡 담기" class="button_rbox" onclick="melon.play.addFormPlayList('frm');"><span class="button_icons type02 scrap"></span><span class="cnt">담기</span></button>
\t\t\t\t\t<button type="button" title="선택된 곡 다운로드" class="button_rbox" onclick="melon.buy.goBuyProduct('frm','','3C0001','input_check','0','1000002721');"><span class="button_icons type02 download"></span><span class="cnt">다운</span></button>
\t\t\t\t\t<button type="button" title="선택된 곡 원음다운로드" class="button_rbox" onclick="melon.buy.goBuyProduct('frm','','3C0001','input_check','110','1000002721');"><span class="button_icons type02 download"></span><span class="cnt"><span class="eng">FLAC</span></span></button>
\t\t\t\t\t<button type="button" title="선택된 곡 선물하기" class="button_rbox" onclick="melon.buy.goPresent('song', 'frm', '1000002721');"><span class="button_icons type02 gift"></span><span class="cnt">선물</span></button>
\t\t\t\t\t
\t\t\t\t</div>
\t\t<table border="1" style="width:100%">
\t\t\t<caption>이 표는 곡 리스트로 체크박스, 순위, 곡정보, 좋아요, 뮤비, 다운, 폰전송 내용을 포함하고 있으며 표 상 하단에 제공하는 전체선택, 듣기, 다운로드, 담기, 선물하기 기능을 이용하실 수 있습니다.</caption>

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t\t<colgroup>
\t\t\t\t\t\t\t<col style="width: 15px"><!-- checkbox -->
\t\t\t\t\t\t\t<col style="width: 62px"><!-- 순서 & 순위 -->
\t\t\t\t\t\t\t<col style="width: 50px"><!-- 순위등락 -->
\t\t\t\t\t\t\t<col style="width: 60px"><!-- 앨범이미지 -->
\t\t\t\t\t\t\t<col style="width: 24px"><!-- 곡 상세가기 -->
\t\t\t\t\t\t\t<col><!-- 곡정보 -->
\t\t\t\t\t\t\t<col style="width: 190px"><!-- 앨범 -->
\t\t\t\t\t\t\t<col style="width: 111px"><!-- 좋아요 -->
\t\t\t\t\t\t\t<col style="width: 58px"><!-- 듣기 -->
\t\t\t\t\t\t\t<col style="width: 52px"><!-- 담기 -->
\t\t\t\t\t\t\t<col style="width: 52px"><!-- 다운 -->
\t\t\t\t\t\t\t<col style="width: 52px"><!-- 뮤비 -->
\t\t\t\t\t\t</colgroup>
\t\t\t\t
\t\t\t
\t\t\t
\t\t\t<thead>
\t\t\t
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<th scope="col">
\t\t\t\t\t\t\t<div class="wrap t_right"><input type="checkbox" title="곡 목록 전체 선택" class="input_check d_checkall"></div>
\t\t\t\t\t\t</th>
\t\t\t\t\t\t<th scope="col">
\t\t\t\t\t\t\t<div class="wrap t_center"><span class="rank">순위</span></div>
\t\t\t\t\t\t</th>
\t\t\t\t\t\t<th scope="col">
\t\t\t\t\t\t\t<div class="wrap none">순위등락</div>
\t\t\t\t\t\t</th>
\t\t\t\t\t\t<th scope="col">
\t\t\t\t\t\t\t<div class="wrap none">앨범이미지</div>
\t\t\t\t\t\t</th>
\t\t\t\t\t\t<th scope="col">
\t\t\t\t\t\t\t<div class="wrap none">곡 상세가기</div>
\t\t\t\t\t\t</th>
\t\t\t\t\t\t<th scope="col">
\t\t\t\t\t\t\t<div class="wrap pd_l_12">곡정보</div>
\t\t\t\t\t\t</th>
\t\t\t\t\t\t<th scope="col">
\t\t\t\t\t\t\t<div class="wrap pd_l_12">앨범</div>
\t\t\t\t\t\t</th>
\t\t\t\t\t\t<th scope="col">
\t\t\t\t\t\t\t<div class="wrap pd_l_30">좋아요</div>
\t\t\t\t\t\t</th>
\t\t\t\t\t\t<th scope="col">
\t\t\t\t\t\t\t<div class="wrap t_center">듣기</div>
\t\t\t\t\t\t</th>
\t\t\t\t\t\t<th scope="col">
\t\t\t\t\t\t\t<div class="wrap t_center">담기</div>
\t\t\t\t\t\t</th>
\t\t\t\t\t\t<th scope="col">
\t\t\t\t\t\t\t<div class="wrap t_center">다운</div>
\t\t\t\t\t\t</th>
\t\t\t\t\t\t<th scope="col">
\t\t\t\t\t\t\t<div class="wrap t_center">뮤비</div>
\t\t\t\t\t\t</th>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t
\t\t\t</thead>
\t\t\t<tbody>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34845949">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="봄여름가을겨울 (Still Life) 곡 선택" class="input_check " name="input_check" value="34845949"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">1</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10908834');" title="봄여름가을겨울 (Still Life)" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/08/834/10908834_20220404174407_500.jpg/melon/resize/120/quality/80/optimize" alt="봄여름가을겨울 (Still Life) - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34845949');" title="봄여름가을겨울 (Still Life) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34845949);" title="봄여름가을겨울 (Still Life) 재생">봄여름가을겨울 (Still Life)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('198094');" title="BIGBANG (빅뱅) - 페이지 이동">BIGBANG (빅뱅)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('198094');" title="BIGBANG (빅뱅) - 페이지 이동">BIGBANG (빅뱅)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10908834');" title="봄여름가을겨울 (Still Life) - 페이지 이동">봄여름가을겨울 (Still Life)</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="봄여름가을겨울 (Still Life) 좋아요" data-song-no="34845949" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
254,246</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34845949);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34845949');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34845949', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34845949','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34997078">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="That That (prod. &amp; feat. SUGA of BTS) 곡 선택" class="input_check " name="input_check" value="34997078"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">2</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10937474');" title="싸다9" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/37/474/10937474_20220428225312_500.jpg/melon/resize/120/quality/80/optimize" alt="싸다9 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34997078');" title="That That (prod. &amp; feat. SUGA of BTS) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34997078);" title="That That (prod. &amp; feat. SUGA of BTS) 재생">That That (prod. &amp; feat. SUGA of BTS)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('3865');" title="싸이 (PSY) - 페이지 이동">싸이 (PSY)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('3865');" title="싸이 (PSY) - 페이지 이동">싸이 (PSY)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10937474');" title="싸다9 - 페이지 이동">싸다9</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="That That (prod. &amp; feat. SUGA of BTS) 좋아요" data-song-no="34997078" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
44,655</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34997078);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34997078');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34997078', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34997078','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34847378">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="LOVE DIVE 곡 선택" class="input_check " name="input_check" value="34847378"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">3</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10909179');" title="LOVE DIVE" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/09/179/10909179_20220405103521_500.jpg/melon/resize/120/quality/80/optimize" alt="LOVE DIVE - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34847378');" title="LOVE DIVE 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34847378);" title="LOVE DIVE 재생">LOVE DIVE</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('3055146');" title="IVE (아이브) - 페이지 이동">IVE (아이브)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('3055146');" title="IVE (아이브) - 페이지 이동">IVE (아이브)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10909179');" title="LOVE DIVE - 페이지 이동">LOVE DIVE</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="LOVE DIVE 좋아요" data-song-no="34847378" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
106,329</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34847378);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34847378');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34847378', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34847378','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34754292">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="TOMBOY 곡 선택" class="input_check " name="input_check" value="34754292"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">4</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10890384');" title="I NEVER DIE" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/90/384/10890384_20220314111504_500.jpg/melon/resize/120/quality/80/optimize" alt="I NEVER DIE - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34754292');" title="TOMBOY 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34754292);" title="TOMBOY 재생">TOMBOY</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2137482');" title="(여자)아이들 - 페이지 이동">(여자)아이들</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2137482');" title="(여자)아이들 - 페이지 이동">(여자)아이들</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10890384');" title="I NEVER DIE - 페이지 이동">I NEVER DIE</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="TOMBOY 좋아요" data-song-no="34754292" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
154,576</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34754292);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34754292');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34754292', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34754292','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34657844">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="사랑인가 봐 곡 선택" class="input_check " name="input_check" value="34657844"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">5</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10871162');" title="사랑인가 봐 (사내맞선 OST 스페셜 트랙)" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/71/162/10871162_20220217162422_500.jpg/melon/resize/120/quality/80/optimize" alt="사랑인가 봐 (사내맞선 OST 스페셜 트랙) - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34657844');" title="사랑인가 봐 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34657844);" title="사랑인가 봐 재생">사랑인가 봐</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('839732');" title="멜로망스 - 페이지 이동">멜로망스</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('839732');" title="멜로망스 - 페이지 이동">멜로망스</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10871162');" title="사랑인가 봐 (사내맞선 OST 스페셜 트랙) - 페이지 이동">사랑인가 봐 (사내맞선 OST 스페셜 트랙)</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="사랑인가 봐 좋아요" data-song-no="34657844" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
97,302</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34657844);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34657844');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34657844', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34657844','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34772475">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Feel My Rhythm 곡 선택" class="input_check " name="input_check" value="34772475"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">6</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10894554');" title="‘The ReVe Festival 2022 - Feel My Rhythm’" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/94/554/10894554_20220321100622_500.jpg/melon/resize/120/quality/80/optimize" alt="‘The ReVe Festival 2022 - Feel My Rhythm’ - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34772475');" title="Feel My Rhythm 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34772475);" title="Feel My Rhythm 재생">Feel My Rhythm</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('780066');" title="Red Velvet (레드벨벳) - 페이지 이동">Red Velvet (레드벨벳)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('780066');" title="Red Velvet (레드벨벳) - 페이지 이동">Red Velvet (레드벨벳)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10894554');" title="‘The ReVe Festival 2022 - Feel My Rhythm’ - 페이지 이동">‘The ReVe Festival 2022 - Feel My Rhythm’</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Feel My Rhythm 좋아요" data-song-no="34772475" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
118,403</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34772475);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34772475');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34772475', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34772475','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34061322">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="사랑은 늘 도망가 곡 선택" class="input_check " name="input_check" value="34061322"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">7</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10735654');" title="신사와 아가씨 OST Part.2" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/107/35/654/10735654_20211008114339_500.jpg/melon/resize/120/quality/80/optimize" alt="신사와 아가씨 OST Part.2 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34061322');" title="사랑은 늘 도망가 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34061322);" title="사랑은 늘 도망가 재생">사랑은 늘 도망가</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10735654');" title="신사와 아가씨 OST Part.2 - 페이지 이동">신사와 아가씨 OST Part.2</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="사랑은 늘 도망가 좋아요" data-song-no="34061322" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
156,014</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34061322);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34061322');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34061322', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34061322','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34908740">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="우리들의 블루스 곡 선택" class="input_check " name="input_check" value="34908740"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">8</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="2단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">2</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg/melon/resize/120/quality/80/optimize" alt="IM HERO - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34908740');" title="우리들의 블루스 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34908740);" title="우리들의 블루스 재생">우리들의 블루스</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO - 페이지 이동">IM HERO</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="우리들의 블루스 좋아요" data-song-no="34908740" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
52,335</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34908740);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34908740');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34908740', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34908740','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34752700">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="GANADARA (Feat. 아이유) 곡 선택" class="input_check " name="input_check" value="34752700"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">9</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10889981');" title="GANADARA" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/89/981/10889981_20220311110820_500.jpg/melon/resize/120/quality/80/optimize" alt="GANADARA - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34752700');" title="GANADARA (Feat. 아이유) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34752700);" title="GANADARA (Feat. 아이유) 재생">GANADARA (Feat. 아이유)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('443420');" title="박재범 - 페이지 이동">박재범</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('443420');" title="박재범 - 페이지 이동">박재범</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10889981');" title="GANADARA - 페이지 이동">GANADARA</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="GANADARA (Feat. 아이유) 좋아요" data-song-no="34752700" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
107,512</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34752700);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34752700');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34752700', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34752700','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34875621">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="LOVE me 곡 선택" class="input_check " name="input_check" value="34875621"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">10</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10916904');" title="LOVE me" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/16/904/10916904_20220412101049_500.jpg/melon/resize/120/quality/80/optimize" alt="LOVE me - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34875621');" title="LOVE me 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34875621);" title="LOVE me 재생">LOVE me</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2758756');" title="BE'O (비오) - 페이지 이동">BE'O (비오)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2758756');" title="BE'O (비오) - 페이지 이동">BE'O (비오)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10916904');" title="LOVE me - 페이지 이동">LOVE me</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="LOVE me 좋아요" data-song-no="34875621" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
52,660</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34875621);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34875621');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34875621', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34875621','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34431086">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="취중고백 곡 선택" class="input_check " name="input_check" value="34431086"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">11</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10816959');" title="취중고백" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/16/959/10816959_20211217144957_500.jpg/melon/resize/120/quality/80/optimize" alt="취중고백 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34431086');" title="취중고백 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34431086);" title="취중고백 재생">취중고백</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('839736');" title="김민석 (멜로망스) - 페이지 이동">김민석 (멜로망스)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('839736');" title="김민석 (멜로망스) - 페이지 이동">김민석 (멜로망스)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10816959');" title="취중고백 - 페이지 이동">취중고백</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="취중고백 좋아요" data-song-no="34431086" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
115,086</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34431086);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34431086');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34431086', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34431086','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34927767">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="정이라고 하자 (Feat. 10CM) 곡 선택" class="input_check " name="input_check" value="34927767"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">12</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10925762');" title="정이라고 하자" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/25/762/10925762_20220419152007_500.jpg/melon/resize/120/quality/80/optimize" alt="정이라고 하자 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34927767');" title="정이라고 하자 (Feat. 10CM) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34927767);" title="정이라고 하자 (Feat. 10CM) 재생">정이라고 하자 (Feat. 10CM)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2744750');" title="BIG Naughty (서동현) - 페이지 이동">BIG Naughty (서동현)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2744750');" title="BIG Naughty (서동현) - 페이지 이동">BIG Naughty (서동현)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10925762');" title="정이라고 하자 - 페이지 이동">정이라고 하자</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="정이라고 하자 (Feat. 10CM) 좋아요" data-song-no="34927767" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
61,285</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34927767);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34927767');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34927767', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34927767','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="35008524">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="다시 만날 수 있을까 곡 선택" class="input_check " name="input_check" value="35008524"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">13</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="2단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">2</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg/melon/resize/120/quality/80/optimize" alt="IM HERO - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('35008524');" title="다시 만날 수 있을까 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',35008524);" title="다시 만날 수 있을까 재생">다시 만날 수 있을까</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO - 페이지 이동">IM HERO</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="다시 만날 수 있을까 좋아요" data-song-no="35008524" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
40,329</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',35008524);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('35008524');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '35008524', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '35008524','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34883833">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="ZOOM 곡 선택" class="input_check " name="input_check" value="34883833"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">14</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10918269');" title="ZOOM" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/18/269/10918269_20220413101153_500.jpg/melon/resize/120/quality/80/optimize" alt="ZOOM - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34883833');" title="ZOOM 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34883833);" title="ZOOM 재생">ZOOM</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('176393');" title="제시 (Jessi) - 페이지 이동">제시 (Jessi)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('176393');" title="제시 (Jessi) - 페이지 이동">제시 (Jessi)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10918269');" title="ZOOM - 페이지 이동">ZOOM</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="ZOOM 좋아요" data-song-no="34883833" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
24,808</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34883833);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34883833');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34883833', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34883833','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34626109">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="INVU 곡 선택" class="input_check " name="input_check" value="34626109"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">15</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="2단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">2</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10863559');" title="INVU - The 3rd Album" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/63/559/10863559_20220214160739_500.jpg/melon/resize/120/quality/80/optimize" alt="INVU - The 3rd Album - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34626109');" title="INVU 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34626109);" title="INVU 재생">INVU</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('236797');" title="태연 (TAEYEON) - 페이지 이동">태연 (TAEYEON)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('236797');" title="태연 (TAEYEON) - 페이지 이동">태연 (TAEYEON)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10863559');" title="INVU - The 3rd Album - 페이지 이동">INVU - The 3rd Album</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="INVU 좋아요" data-song-no="34626109" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
108,181</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34626109);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34626109');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34626109', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34626109','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34701627">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="듣고 싶을까 곡 선택" class="input_check " name="input_check" value="34701627"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">16</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10880544');" title="듣고 싶을까" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/80/544/10880544_20220225141002_500.jpg/melon/resize/120/quality/80/optimize" alt="듣고 싶을까 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34701627');" title="듣고 싶을까 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34701627);" title="듣고 싶을까 재생">듣고 싶을까</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2939212');" title="MSG워너비(M.O.M) - 페이지 이동">MSG워너비(M.O.M)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2939212');" title="MSG워너비(M.O.M) - 페이지 이동">MSG워너비(M.O.M)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10880544');" title="듣고 싶을까 - 페이지 이동">듣고 싶을까</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="듣고 싶을까 좋아요" data-song-no="34701627" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
62,001</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34701627);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34701627');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34701627', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34701627','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="33480898">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="신호등 곡 선택" class="input_check " name="input_check" value="33480898"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">17</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10607796');" title="신호등" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/07/796/10607796_20210513201807_500.jpg/melon/resize/120/quality/80/optimize" alt="신호등 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33480898');" title="신호등 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33480898);" title="신호등 재생">신호등</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2138620');" title="이무진 - 페이지 이동">이무진</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2138620');" title="이무진 - 페이지 이동">이무진</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10607796');" title="신호등 - 페이지 이동">신호등</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="신호등 좋아요" data-song-no="33480898" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
272,395</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33480898);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33480898');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33480898', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33480898','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="32508053">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="이제 나만 믿어요 곡 선택" class="input_check " name="input_check" value="32508053"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">18</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="2단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">2</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10412319');" title="내일은 미스터트롯 우승자 특전곡" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/104/12/319/10412319_20200403103006_500.jpg/melon/resize/120/quality/80/optimize" alt="내일은 미스터트롯 우승자 특전곡 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('32508053');" title="이제 나만 믿어요 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',32508053);" title="이제 나만 믿어요 재생">이제 나만 믿어요</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10412319');" title="내일은 미스터트롯 우승자 특전곡 - 페이지 이동">내일은 미스터트롯 우승자 특전곡</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="이제 나만 믿어요 좋아요" data-song-no="32508053" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
152,938</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',32508053);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('32508053');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '32508053', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '32508053','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34943312">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="나의 X에게 곡 선택" class="input_check " name="input_check" value="34943312"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">19</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10929486');" title="나의 X에게" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/29/486/10929486_20220422151852_500.jpg/melon/resize/120/quality/80/optimize" alt="나의 X에게 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34943312');" title="나의 X에게 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34943312);" title="나의 X에게 재생">나의 X에게</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994005');" title="경서 - 페이지 이동">경서</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994005');" title="경서 - 페이지 이동">경서</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10929486');" title="나의 X에게 - 페이지 이동">나의 X에게</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="나의 X에게 좋아요" data-song-no="34943312" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
25,464</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34943312);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34943312');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34943312', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34943312','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34349913">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="ELEVEN 곡 선택" class="input_check " name="input_check" value="34349913"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">20</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10798794');" title="ELEVEN" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/107/98/794/10798794_20211201113915_500.jpg/melon/resize/120/quality/80/optimize" alt="ELEVEN - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34349913');" title="ELEVEN 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34349913);" title="ELEVEN 재생">ELEVEN</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('3055146');" title="IVE (아이브) - 페이지 이동">IVE (아이브)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('3055146');" title="IVE (아이브) - 페이지 이동">IVE (아이브)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10798794');" title="ELEVEN - 페이지 이동">ELEVEN</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="ELEVEN 좋아요" data-song-no="34349913" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
127,299</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34349913);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34349913');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34349913', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34349913','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="33496587">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="다정히 내 이름을 부르면 곡 선택" class="input_check " name="input_check" value="33496587"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">21</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10610525');" title="다정히 내 이름을 부르면 (경서예지 x 전건호)" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/10/525/10610525_20210518143433_500.jpg/melon/resize/120/quality/80/optimize" alt="다정히 내 이름을 부르면 (경서예지 x 전건호) - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33496587');" title="다정히 내 이름을 부르면 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33496587);" title="다정히 내 이름을 부르면 재생">다정히 내 이름을 부르면</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2863470');" title="경서예지 - 페이지 이동">경서예지</a>, <a href="javascript:melon.link.goArtistDetail('2739011');" title="전건호 - 페이지 이동">전건호</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2863470');" title="경서예지 - 페이지 이동">경서예지</a>, <a href="javascript:melon.link.goArtistDetail('2739011');" title="전건호 - 페이지 이동">전건호</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<div class="wrap_atist" style="display:none;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" title="아티스트 더보기" class="button_icons etc more_down" data-control="dropdown"><span class="none">아티스트명 더보기</span></button>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="atist_view" style="display:none;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="javascript:melon.link.goArtistDetail('2863470');" title="경서예지 페이지 이동" class="ellipsis">경서예지</a></li>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="javascript:melon.link.goArtistDetail('2739011');" title="전건호 페이지 이동" class="ellipsis">전건호</a></li>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10610525');" title="다정히 내 이름을 부르면 (경서예지 x 전건호) - 페이지 이동">다정히 내 이름을 부르면 (경서예지 x 전건호)</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="다정히 내 이름을 부르면 좋아요" data-song-no="33496587" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
129,463</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33496587);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33496587');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33496587', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33496587','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="35008525">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="무지개 곡 선택" class="input_check " name="input_check" value="35008525"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">22</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg/melon/resize/120/quality/80/optimize" alt="IM HERO - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('35008525');" title="무지개 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',35008525);" title="무지개 재생">무지개</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO - 페이지 이동">IM HERO</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="무지개 좋아요" data-song-no="35008525" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
32,260</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',35008525);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('35008525');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '35008525', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '35008525','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="33658563">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="STAY 곡 선택" class="input_check " name="input_check" value="33658563"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">23</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10646395');" title="Stay" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/46/395/10646395_20210707141710_500.jpg/melon/resize/120/quality/80/optimize" alt="Stay - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33658563');" title="STAY 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33658563);" title="STAY 재생">STAY</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2743730');" title="The Kid LAROI - 페이지 이동">The Kid LAROI</a>, <a href="javascript:melon.link.goArtistDetail('420621');" title="Justin Bieber - 페이지 이동">Justin Bieber</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2743730');" title="The Kid LAROI - 페이지 이동">The Kid LAROI</a>, <a href="javascript:melon.link.goArtistDetail('420621');" title="Justin Bieber - 페이지 이동">Justin Bieber</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<div class="wrap_atist" style="display:none;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" title="아티스트 더보기" class="button_icons etc more_down" data-control="dropdown"><span class="none">아티스트명 더보기</span></button>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="atist_view" style="display:none;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="javascript:melon.link.goArtistDetail('2743730');" title="The Kid LAROI 페이지 이동" class="ellipsis">The Kid LAROI</a></li>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="javascript:melon.link.goArtistDetail('420621');" title="Justin Bieber 페이지 이동" class="ellipsis">Justin Bieber</a></li>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10646395');" title="Stay - 페이지 이동">Stay</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="STAY 좋아요" data-song-no="33658563" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
217,598</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33658563);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33658563');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33658563', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33658563','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="35008527">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="아버지 곡 선택" class="input_check " name="input_check" value="35008527"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">24</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg/melon/resize/120/quality/80/optimize" alt="IM HERO - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('35008527');" title="아버지 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',35008527);" title="아버지 재생">아버지</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO - 페이지 이동">IM HERO</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="아버지 좋아요" data-song-no="35008527" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
31,129</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',35008527);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('35008527');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '35008527', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '35008527','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34754299">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="MY BAG 곡 선택" class="input_check " name="input_check" value="34754299"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">25</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="2단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">2</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10890384');" title="I NEVER DIE" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/90/384/10890384_20220314111504_500.jpg/melon/resize/120/quality/80/optimize" alt="I NEVER DIE - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34754299');" title="MY BAG 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34754299);" title="MY BAG 재생">MY BAG</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2137482');" title="(여자)아이들 - 페이지 이동">(여자)아이들</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2137482');" title="(여자)아이들 - 페이지 이동">(여자)아이들</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10890384');" title="I NEVER DIE - 페이지 이동">I NEVER DIE</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="MY BAG 좋아요" data-song-no="34754299" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
44,756</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34754299);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34754299');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34754299', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34754299','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34538515">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="SMILEY (Feat. BIBI) 곡 선택" class="input_check " name="input_check" value="34538515"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">26</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="2단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">2</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10842611');" title="ˣ‿ˣ (SMiLEY)" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/42/611/10842611_20220117110002_500.jpg/melon/resize/120/quality/80/optimize" alt="ˣ‿ˣ (SMiLEY) - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34538515');" title="SMILEY (Feat. BIBI) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34538515);" title="SMILEY (Feat. BIBI) 재생">SMILEY (Feat. BIBI)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2399724');" title="YENA (최예나) - 페이지 이동">YENA (최예나)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2399724');" title="YENA (최예나) - 페이지 이동">YENA (최예나)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10842611');" title="ˣ‿ˣ (SMiLEY) - 페이지 이동">ˣ‿ˣ (SMiLEY)</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="SMILEY (Feat. BIBI) 좋아요" data-song-no="34538515" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
105,956</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34538515);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34538515');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34538515', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34538515','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="35008526">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="손이 참 곱던 그대 곡 선택" class="input_check " name="input_check" value="35008526"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">27</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg/melon/resize/120/quality/80/optimize" alt="IM HERO - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('35008526');" title="손이 참 곱던 그대 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',35008526);" title="손이 참 곱던 그대 재생">손이 참 곱던 그대</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO - 페이지 이동">IM HERO</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="손이 참 곱던 그대 좋아요" data-song-no="35008526" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
30,658</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',35008526);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('35008526');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '35008526', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '35008526','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34256568">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="회전목마 (Feat. Zion.T, 원슈타인) (Prod. Slom) 곡 선택" class="input_check " name="input_check" value="34256568"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">28</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="2단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">2</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10775252');" title="쇼미더머니 10 Episode 2" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/107/75/252/10775252_20211112142804_500.jpg/melon/resize/120/quality/80/optimize" alt="쇼미더머니 10 Episode 2 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34256568');" title="회전목마 (Feat. Zion.T, 원슈타인) (Prod. Slom) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34256568);" title="회전목마 (Feat. Zion.T, 원슈타인) (Prod. Slom) 재생">회전목마 (Feat. Zion.T, 원슈타인) (Prod. Slom)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2561475');" title="sokodomo - 페이지 이동">sokodomo</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2561475');" title="sokodomo - 페이지 이동">sokodomo</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10775252');" title="쇼미더머니 10 Episode 2 - 페이지 이동">쇼미더머니 10 Episode 2</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="회전목마 (Feat. Zion.T, 원슈타인) (Prod. Slom) 좋아요" data-song-no="34256568" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
202,309</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34256568);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34256568');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34256568', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34256568','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="35008528">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="A bientot 곡 선택" class="input_check " name="input_check" value="35008528"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">29</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg/melon/resize/120/quality/80/optimize" alt="IM HERO - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('35008528');" title="A bientot 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',35008528);" title="A bientot 재생">A bientot</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO - 페이지 이동">IM HERO</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="A bientot 좋아요" data-song-no="35008528" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
30,856</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',35008528);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('35008528');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '35008528', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '35008528','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="35008531">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="사랑해 진짜 곡 선택" class="input_check " name="input_check" value="35008531"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">30</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="5단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">5</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg/melon/resize/120/quality/80/optimize" alt="IM HERO - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('35008531');" title="사랑해 진짜 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',35008531);" title="사랑해 진짜 재생">사랑해 진짜</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO - 페이지 이동">IM HERO</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="사랑해 진짜 좋아요" data-song-no="35008531" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
30,695</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',35008531);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('35008531');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '35008531', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '35008531','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34599917">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="언제나 사랑해 곡 선택" class="input_check " name="input_check" value="34599917"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">31</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10857681');" title="조영수 리메이크 프로젝트 Part.2" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/57/681/10857681_20220204162442_500.jpg/melon/resize/120/quality/80/optimize" alt="조영수 리메이크 프로젝트 Part.2 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34599917');" title="언제나 사랑해 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34599917);" title="언제나 사랑해 재생">언제나 사랑해</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('858125');" title="케이시 (Kassy) - 페이지 이동">케이시 (Kassy)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('858125');" title="케이시 (Kassy) - 페이지 이동">케이시 (Kassy)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10857681');" title="조영수 리메이크 프로젝트 Part.2 - 페이지 이동">조영수 리메이크 프로젝트 Part.2</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="언제나 사랑해 좋아요" data-song-no="34599917" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
46,579</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34599917);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34599917');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34599917', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34599917','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="33978183">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="너를 생각해 곡 선택" class="input_check " name="input_check" value="33978183"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">32</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10716399');" title="너를 생각해" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/107/16/399/10716399_20210916173429_500.jpg/melon/resize/120/quality/80/optimize" alt="너를 생각해 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33978183');" title="너를 생각해 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33978183);" title="너를 생각해 재생">너를 생각해</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2880487');" title="주시크 (Joosiq) - 페이지 이동">주시크 (Joosiq)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2880487');" title="주시크 (Joosiq) - 페이지 이동">주시크 (Joosiq)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10716399');" title="너를 생각해 - 페이지 이동">너를 생각해</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="너를 생각해 좋아요" data-song-no="33978183" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
118,574</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33978183);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33978183');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33978183', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33978183','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34668619">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="RUN2U 곡 선택" class="input_check " name="input_check" value="34668619"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">33</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="4단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">4</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10873811');" title="YOUNG-LUV.COM" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/73/811/10873811_20220221141100_500.jpg/melon/resize/120/quality/80/optimize" alt="YOUNG-LUV.COM - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34668619');" title="RUN2U 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34668619);" title="RUN2U 재생">RUN2U</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2899290');" title="STAYC(스테이씨) - 페이지 이동">STAYC(스테이씨)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2899290');" title="STAYC(스테이씨) - 페이지 이동">STAYC(스테이씨)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10873811');" title="YOUNG-LUV.COM - 페이지 이동">YOUNG-LUV.COM</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="RUN2U 좋아요" data-song-no="34668619" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
68,467</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34668619);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34668619');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34668619', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34668619','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="35008532">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="연애편지 곡 선택" class="input_check " name="input_check" value="35008532"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">34</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="7단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">7</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg/melon/resize/120/quality/80/optimize" alt="IM HERO - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('35008532');" title="연애편지 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',35008532);" title="연애편지 재생">연애편지</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO - 페이지 이동">IM HERO</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="연애편지 좋아요" data-song-no="35008532" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
30,202</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',35008532);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('35008532');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '35008532', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '35008532','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="33487342">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Next Level 곡 선택" class="input_check " name="input_check" value="33487342"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">35</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10609232');" title="Next Level" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/09/232/10609232_20210517155130_500.jpg/melon/resize/120/quality/80/optimize" alt="Next Level - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33487342');" title="Next Level 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33487342);" title="Next Level 재생">Next Level</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2899555');" title="aespa - 페이지 이동">aespa</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2899555');" title="aespa - 페이지 이동">aespa</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10609232');" title="Next Level - 페이지 이동">Next Level</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Next Level 좋아요" data-song-no="33487342" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
242,871</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33487342);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33487342');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33487342', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33487342','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34298499">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="리무진 (Feat. MINO) (Prod. GRAY) 곡 선택" class="input_check " name="input_check" value="34298499"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">36</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10784974');" title="쇼미더머니 10 Episode 3" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/107/84/974/10784974_20211119152051_500.jpg/melon/resize/120/quality/80/optimize" alt="쇼미더머니 10 Episode 3 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34298499');" title="리무진 (Feat. MINO) (Prod. GRAY) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34298499);" title="리무진 (Feat. MINO) (Prod. GRAY) 재생">리무진 (Feat. MINO) (Prod. GRAY)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2758756');" title="BE'O (비오) - 페이지 이동">BE'O (비오)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2758756');" title="BE'O (비오) - 페이지 이동">BE'O (비오)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10784974');" title="쇼미더머니 10 Episode 3 - 페이지 이동">쇼미더머니 10 Episode 3</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="리무진 (Feat. MINO) (Prod. GRAY) 좋아요" data-song-no="34298499" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
174,693</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34298499);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34298499');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34298499', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34298499','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34930369">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Seoul 곡 선택" class="input_check " name="input_check" value="34930369"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">37</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="4단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">4</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10926502');" title="Seoul" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/26/502/10926502_20220420071020_500.jpg/melon/resize/120/quality/80/optimize" alt="Seoul - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34930369');" title="Seoul 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34930369);" title="Seoul 재생">Seoul</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('792022');" title="볼빨간사춘기 - 페이지 이동">볼빨간사춘기</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('792022');" title="볼빨간사춘기 - 페이지 이동">볼빨간사춘기</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10926502');" title="Seoul - 페이지 이동">Seoul</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Seoul 좋아요" data-song-no="34930369" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
24,150</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34930369);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34930369');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34930369', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34930369','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="35008529">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="사랑역 곡 선택" class="input_check " name="input_check" value="35008529"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">38</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="5단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">5</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg/melon/resize/120/quality/80/optimize" alt="IM HERO - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('35008529');" title="사랑역 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',35008529);" title="사랑역 재생">사랑역</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO - 페이지 이동">IM HERO</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="사랑역 좋아요" data-song-no="35008529" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
30,024</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',35008529);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('35008529');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '35008529', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '35008529','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="35008534">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="인생찬가 곡 선택" class="input_check " name="input_check" value="35008534"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">39</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="6단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">6</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg/melon/resize/120/quality/80/optimize" alt="IM HERO - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('35008534');" title="인생찬가 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',35008534);" title="인생찬가 재생">인생찬가</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO - 페이지 이동">IM HERO</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="인생찬가 좋아요" data-song-no="35008534" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
30,540</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',35008534);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('35008534');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '35008534', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '35008534','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34864406">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="That's Hilarious 곡 선택" class="input_check " name="input_check" value="34864406"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">40</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10844485');" title="That's Hilarious" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/44/485/10844485_20220407163235_500.jpg/melon/resize/120/quality/80/optimize" alt="That's Hilarious - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34864406');" title="That's Hilarious 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34864406);" title="That's Hilarious 재생">That's Hilarious</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('838654');" title="Charlie Puth - 페이지 이동">Charlie Puth</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('838654');" title="Charlie Puth - 페이지 이동">Charlie Puth</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10844485');" title="That's Hilarious - 페이지 이동">That's Hilarious</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="That's Hilarious 좋아요" data-song-no="34864406" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
40,017</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34864406);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34864406');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34864406', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34864406','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="33655994">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Weekend 곡 선택" class="input_check " name="input_check" value="33655994"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">41</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10645654');" title="Weekend" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/45/654/10645654_20210706155154_500.jpg/melon/resize/120/quality/80/optimize" alt="Weekend - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33655994');" title="Weekend 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33655994);" title="Weekend 재생">Weekend</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('236797');" title="태연 (TAEYEON) - 페이지 이동">태연 (TAEYEON)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('236797');" title="태연 (TAEYEON) - 페이지 이동">태연 (TAEYEON)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10645654');" title="Weekend - 페이지 이동">Weekend</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Weekend 좋아요" data-song-no="33655994" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
172,185</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33655994);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33655994');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33655994', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33655994','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="32872978">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Dynamite 곡 선택" class="input_check " name="input_check" value="32872978"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">42</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10479150');" title="Dynamite (DayTime Version)" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/104/79/150/10479150_20200918102847_500.jpg/melon/resize/120/quality/80/optimize" alt="Dynamite (DayTime Version) - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('32872978');" title="Dynamite 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',32872978);" title="Dynamite 재생">Dynamite</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 - 페이지 이동">방탄소년단</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 - 페이지 이동">방탄소년단</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10479150');" title="Dynamite (DayTime Version) - 페이지 이동">Dynamite (DayTime Version)</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Dynamite 좋아요" data-song-no="32872978" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
432,406</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',32872978);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('32872978');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '32872978', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '32872978','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34481680">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="드라마 곡 선택" class="input_check " name="input_check" value="34481680"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">43</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="6단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">6</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10827816');" title="조각집" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/27/816/10827816_20211229143632_500.jpg/melon/resize/120/quality/80/optimize" alt="조각집 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34481680');" title="드라마 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34481680);" title="드라마 재생">드라마</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('261143');" title="아이유 - 페이지 이동">아이유</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('261143');" title="아이유 - 페이지 이동">아이유</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10827816');" title="조각집 - 페이지 이동">조각집</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="드라마 좋아요" data-song-no="34481680" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
128,372</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34481680);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34481680');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34481680', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34481680','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="35008530">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="보금자리 곡 선택" class="input_check " name="input_check" value="35008530"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">44</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="2단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">2</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg/melon/resize/120/quality/80/optimize" alt="IM HERO - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('35008530');" title="보금자리 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',35008530);" title="보금자리 재생">보금자리</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO - 페이지 이동">IM HERO</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="보금자리 좋아요" data-song-no="35008530" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
29,717</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',35008530);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('35008530');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '35008530', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '35008530','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="35008533">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="사랑해요 그대를 곡 선택" class="input_check " name="input_check" value="35008533"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">45</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="2단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">2</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg/melon/resize/120/quality/80/optimize" alt="IM HERO - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('35008533');" title="사랑해요 그대를 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',35008533);" title="사랑해요 그대를 재생">사랑해요 그대를</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994944');" title="임영웅 - 페이지 이동">임영웅</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10923444');" title="IM HERO - 페이지 이동">IM HERO</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="사랑해요 그대를 좋아요" data-song-no="35008533" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
29,874</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',35008533);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('35008533');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '35008533', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '35008533','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34101563">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="strawberry moon 곡 선택" class="input_check " name="input_check" value="34101563"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">46</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="4단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">4</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10743453');" title="strawberry moon" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/107/43/453/10743453_20211018165252_500.jpg/melon/resize/120/quality/80/optimize" alt="strawberry moon - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34101563');" title="strawberry moon 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34101563);" title="strawberry moon 재생">strawberry moon</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('261143');" title="아이유 - 페이지 이동">아이유</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('261143');" title="아이유 - 페이지 이동">아이유</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10743453');" title="strawberry moon - 페이지 이동">strawberry moon</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="strawberry moon 좋아요" data-song-no="34101563" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
193,155</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34101563);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34101563');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34101563', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34101563','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="33507137">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Butter 곡 선택" class="input_check " name="input_check" value="33507137"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">47</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10612483');" title="Butter" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/12/483/10612483_20210521111412_500.jpg/melon/resize/120/quality/80/optimize" alt="Butter - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33507137');" title="Butter 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33507137);" title="Butter 재생">Butter</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 - 페이지 이동">방탄소년단</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 - 페이지 이동">방탄소년단</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10612483');" title="Butter - 페이지 이동">Butter</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Butter 좋아요" data-song-no="33507137" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
268,986</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33507137);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33507137');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33507137', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33507137','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34817660">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="아무래도 난 곡 선택" class="input_check " name="input_check" value="34817660"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">48</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10903658');" title="아무래도 난" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/03/658/10903658_20220329185034_500.jpg/melon/resize/120/quality/80/optimize" alt="아무래도 난 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34817660');" title="아무래도 난 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34817660);" title="아무래도 난 재생">아무래도 난</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2880487');" title="주시크 (Joosiq) - 페이지 이동">주시크 (Joosiq)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2880487');" title="주시크 (Joosiq) - 페이지 이동">주시크 (Joosiq)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10903658');" title="아무래도 난 - 페이지 이동">아무래도 난</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="아무래도 난 좋아요" data-song-no="34817660" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
29,251</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34817660);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34817660');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34817660', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34817660','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="34494149">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Step Back 곡 선택" class="input_check " name="input_check" value="34494149"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">49</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10830791');" title="Step Back" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/30/791/10830791_20220103153352_500.jpg/melon/resize/120/quality/80/optimize" alt="Step Back - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34494149');" title="Step Back 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34494149);" title="Step Back 재생">Step Back</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('3063272');" title="GOT the beat - 페이지 이동">GOT the beat</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('3063272');" title="GOT the beat - 페이지 이동">GOT the beat</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10830791');" title="Step Back - 페이지 이동">Step Back</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Step Back 좋아요" data-song-no="34494149" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
89,522</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34494149);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34494149');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34494149', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34494149','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst50" id="lst50" data-song-no="33666269">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Permission to Dance 곡 선택" class="input_check " name="input_check" value="33666269"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">50</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="5단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">5</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10648182');" title="Butter / Permission to Dance" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/48/182/10648182_20210709104950_500.jpg/melon/resize/120/quality/80/optimize" alt="Butter / Permission to Dance - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33666269');" title="Permission to Dance 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33666269);" title="Permission to Dance 재생">Permission to Dance</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 - 페이지 이동">방탄소년단</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 - 페이지 이동">방탄소년단</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10648182');" title="Butter / Permission to Dance - 페이지 이동">Butter / Permission to Dance</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Permission to Dance 좋아요" data-song-no="33666269" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
202,199</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33666269);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33666269');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33666269', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33666269','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34997079">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Celeb 곡 선택" class="input_check " name="input_check" value="34997079"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">51</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10937474');" title="싸다9" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/37/474/10937474_20220428225312_500.jpg/melon/resize/120/quality/80/optimize" alt="싸다9 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34997079');" title="Celeb 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34997079);" title="Celeb 재생">Celeb</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('3865');" title="싸이 (PSY) - 페이지 이동">싸이 (PSY)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('3865');" title="싸이 (PSY) - 페이지 이동">싸이 (PSY)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10937474');" title="싸다9 - 페이지 이동">싸다9</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Celeb 좋아요" data-song-no="34997079" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
8,514</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34997079);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34997079');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34997079', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34997079','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34535898">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="호랑수월가 곡 선택" class="input_check " name="input_check" value="34535898"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">52</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10842005');" title="호랑수월가" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/42/005/10842005_20220114144240_500.jpg/melon/resize/120/quality/80/optimize" alt="호랑수월가 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34535898');" title="호랑수월가 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34535898);" title="호랑수월가 재생">호랑수월가</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2893700');" title="탑현 - 페이지 이동">탑현</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2893700');" title="탑현 - 페이지 이동">탑현</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10842005');" title="호랑수월가 - 페이지 이동">호랑수월가</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="호랑수월가 좋아요" data-song-no="34535898" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
63,255</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34535898);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34535898');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34535898', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34535898','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34701816">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="존재만으로 곡 선택" class="input_check " name="input_check" value="34701816"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">53</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10880569');" title="스물다섯 스물하나 OST Part 4" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/80/569/10880569_20220225143552_500.jpg/melon/resize/120/quality/80/optimize" alt="스물다섯 스물하나 OST Part 4 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34701816');" title="존재만으로 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34701816);" title="존재만으로 재생">존재만으로</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('1702472');" title="원슈타인 - 페이지 이동">원슈타인</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('1702472');" title="원슈타인 - 페이지 이동">원슈타인</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10880569');" title="스물다섯 스물하나 OST Part 4 - 페이지 이동">스물다섯 스물하나 OST Part 4</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="존재만으로 좋아요" data-song-no="34701816" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
55,871</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34701816);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34701816');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34701816', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34701816','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34398735">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Counting Stars (Feat. Beenzino) 곡 선택" class="input_check " name="input_check" value="34398735"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">54</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="2단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">2</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10810162');" title="Counting Stars" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/10/162/10810162_20211210171704_500.jpg/melon/resize/120/quality/80/optimize" alt="Counting Stars - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34398735');" title="Counting Stars (Feat. Beenzino) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34398735);" title="Counting Stars (Feat. Beenzino) 재생">Counting Stars (Feat. Beenzino)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2758756');" title="BE'O (비오) - 페이지 이동">BE'O (비오)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2758756');" title="BE'O (비오) - 페이지 이동">BE'O (비오)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10810162');" title="Counting Stars - 페이지 이동">Counting Stars</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Counting Stars (Feat. Beenzino) 좋아요" data-song-no="34398735" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
157,918</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34398735);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34398735');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34398735', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34398735','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33372781">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="라일락 곡 선택" class="input_check " name="input_check" value="33372781"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">55</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10554246');" title="IU 5th Album 'LILAC'" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/105/54/246/10554246_20210325161233_500.jpg/melon/resize/120/quality/80/optimize" alt="IU 5th Album 'LILAC' - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33372781');" title="라일락 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33372781);" title="라일락 재생">라일락</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('261143');" title="아이유 - 페이지 이동">아이유</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('261143');" title="아이유 - 페이지 이동">아이유</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10554246');" title="IU 5th Album 'LILAC' - 페이지 이동">IU 5th Album 'LILAC'</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="라일락 좋아요" data-song-no="33372781" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
238,610</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33372781);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33372781');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33372781', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33372781','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34360855">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="눈이 오잖아(Feat.헤이즈) 곡 선택" class="input_check " name="input_check" value="34360855"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">56</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10801677');" title="눈이 오잖아(Feat.헤이즈)" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/01/677/10801677_20211202181813_500.jpg/melon/resize/120/quality/80/optimize" alt="눈이 오잖아(Feat.헤이즈) - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34360855');" title="눈이 오잖아(Feat.헤이즈) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34360855);" title="눈이 오잖아(Feat.헤이즈) 재생">눈이 오잖아(Feat.헤이즈)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2138620');" title="이무진 - 페이지 이동">이무진</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2138620');" title="이무진 - 페이지 이동">이무진</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10801677');" title="눈이 오잖아(Feat.헤이즈) - 페이지 이동">눈이 오잖아(Feat.헤이즈)</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="눈이 오잖아(Feat.헤이즈) 좋아요" data-song-no="34360855" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
79,789</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34360855);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34360855');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34360855', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34360855','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33625988">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="바라만 본다 곡 선택" class="input_check " name="input_check" value="33625988"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">57</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10638275');" title="MSG워너비 1집" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/38/275/10638275_20210625172521_500.jpg/melon/resize/120/quality/80/optimize" alt="MSG워너비 1집 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33625988');" title="바라만 본다 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33625988);" title="바라만 본다 재생">바라만 본다</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2939212');" title="MSG워너비(M.O.M) - 페이지 이동">MSG워너비(M.O.M)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2939212');" title="MSG워너비(M.O.M) - 페이지 이동">MSG워너비(M.O.M)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10638275');" title="MSG워너비 1집 - 페이지 이동">MSG워너비 1집</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="바라만 본다 좋아요" data-song-no="33625988" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
174,712</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33625988);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33625988');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33625988', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33625988','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="32698101">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="OHAYO MY NIGHT 곡 선택" class="input_check " name="input_check" value="32698101"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">58</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10447520');" title="OHAYO MY NIGHT" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/104/47/520/10447520_20200619123343_500.jpg/melon/resize/120/quality/80/optimize" alt="OHAYO MY NIGHT - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('32698101');" title="OHAYO MY NIGHT 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',32698101);" title="OHAYO MY NIGHT 재생">OHAYO MY NIGHT</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('785501');" title="디핵 (D-Hack) - 페이지 이동">디핵 (D-Hack)</a>, <a href="javascript:melon.link.goArtistDetail('2750866');" title="PATEKO (파테코) - 페이지 이동">PATEKO (파테코)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('785501');" title="디핵 (D-Hack) - 페이지 이동">디핵 (D-Hack)</a>, <a href="javascript:melon.link.goArtistDetail('2750866');" title="PATEKO (파테코) - 페이지 이동">PATEKO (파테코)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<div class="wrap_atist" style="display:none;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" title="아티스트 더보기" class="button_icons etc more_down" data-control="dropdown"><span class="none">아티스트명 더보기</span></button>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="atist_view" style="display:none;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="javascript:melon.link.goArtistDetail('785501');" title="디핵 (D-Hack) 페이지 이동" class="ellipsis">디핵 (D-Hack)</a></li>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="javascript:melon.link.goArtistDetail('2750866');" title="PATEKO (파테코) 페이지 이동" class="ellipsis">PATEKO (파테코)</a></li>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10447520');" title="OHAYO MY NIGHT - 페이지 이동">OHAYO MY NIGHT</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="OHAYO MY NIGHT 좋아요" data-song-no="32698101" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
182,257</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',32698101);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('32698101');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '32698101', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '32698101','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="3414749">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="내 손을 잡아 곡 선택" class="input_check " name="input_check" value="3414749"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">59</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('1286252');" title="최고의 사랑 OST Part.4" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm/album/images/012/86/252/1286252_500.jpg/melon/resize/120/quality/80/optimize" alt="최고의 사랑 OST Part.4 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('3414749');" title="내 손을 잡아 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',3414749);" title="내 손을 잡아 재생">내 손을 잡아</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('261143');" title="아이유 - 페이지 이동">아이유</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('261143');" title="아이유 - 페이지 이동">아이유</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('1286252');" title="최고의 사랑 OST Part.4 - 페이지 이동">최고의 사랑 OST Part.4</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="내 손을 잡아 좋아요" data-song-no="3414749" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
188,402</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',3414749);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('3414749');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '3414749', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '3414749','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34787226">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="내가 아니라도 곡 선택" class="input_check " name="input_check" value="34787226"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">60</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10897407');" title="내가 아니라도" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/97/407/10897407_20220323150744_500.jpg/melon/resize/120/quality/80/optimize" alt="내가 아니라도 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34787226');" title="내가 아니라도 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34787226);" title="내가 아니라도 재생">내가 아니라도</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('683631');" title="주호 - 페이지 이동">주호</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('683631');" title="주호 - 페이지 이동">주호</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10897407');" title="내가 아니라도 - 페이지 이동">내가 아니라도</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="내가 아니라도 좋아요" data-song-no="34787226" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
20,146</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34787226);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34787226');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34787226', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34787226','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="4446485">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="너의 모든 순간 곡 선택" class="input_check " name="input_check" value="4446485"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">61</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('2232505');" title="별에서 온 그대 OST Part.7" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm/album/images/022/32/505/2232505_500.jpg/melon/resize/120/quality/80/optimize" alt="별에서 온 그대 OST Part.7 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('4446485');" title="너의 모든 순간 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',4446485);" title="너의 모든 순간 재생">너의 모든 순간</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('3305');" title="성시경 - 페이지 이동">성시경</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('3305');" title="성시경 - 페이지 이동">성시경</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('2232505');" title="별에서 온 그대 OST Part.7 - 페이지 이동">별에서 온 그대 OST Part.7</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="너의 모든 순간 좋아요" data-song-no="4446485" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
204,795</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',4446485);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('4446485');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '4446485', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '4446485','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="4276080">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="스물다섯, 스물하나 곡 선택" class="input_check " name="input_check" value="4276080"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">62</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('2210557');" title="Goodbye, grief." class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm/album/images/022/10/557/2210557_500.jpg/melon/resize/120/quality/80/optimize" alt="Goodbye, grief. - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('4276080');" title="스물다섯, 스물하나 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',4276080);" title="스물다섯, 스물하나 재생">스물다섯, 스물하나</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('100094');" title="자우림 - 페이지 이동">자우림</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('100094');" title="자우림 - 페이지 이동">자우림</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('2210557');" title="Goodbye, grief. - 페이지 이동">Goodbye, grief.</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="스물다섯, 스물하나 좋아요" data-song-no="4276080" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
182,302</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',4276080);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('4276080');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '4276080', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '4276080','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34041584">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Savage 곡 선택" class="input_check " name="input_check" value="34041584"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">63</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10731792');" title="Savage - The 1st Mini Album" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/107/31/792/10731792_20211005145407_500.jpg/melon/resize/120/quality/80/optimize" alt="Savage - The 1st Mini Album - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34041584');" title="Savage 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34041584);" title="Savage 재생">Savage</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2899555');" title="aespa - 페이지 이동">aespa</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2899555');" title="aespa - 페이지 이동">aespa</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10731792');" title="Savage - The 1st Mini Album - 페이지 이동">Savage - The 1st Mini Album</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Savage 좋아요" data-song-no="34041584" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
146,275</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34041584);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34041584');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34041584', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34041584','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34752959">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="사랑인걸 곡 선택" class="input_check " name="input_check" value="34752959"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">64</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10890071');" title="사랑인걸" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/90/071/10890071_20220311145628_500.jpg/melon/resize/120/quality/80/optimize" alt="사랑인걸 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34752959');" title="사랑인걸 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34752959);" title="사랑인걸 재생">사랑인걸</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('711476');" title="한동근 - 페이지 이동">한동근</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('711476');" title="한동근 - 페이지 이동">한동근</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10890071');" title="사랑인걸 - 페이지 이동">사랑인걸</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="사랑인걸 좋아요" data-song-no="34752959" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
23,378</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34752959);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34752959');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34752959', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34752959','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="30244931">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="봄날 곡 선택" class="input_check " name="input_check" value="30244931"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">65</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10037969');" title="YOU NEVER WALK ALONE" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm/album/images/100/37/969/10037969_500.jpg/melon/resize/120/quality/80/optimize" alt="YOU NEVER WALK ALONE - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('30244931');" title="봄날 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',30244931);" title="봄날 재생">봄날</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 - 페이지 이동">방탄소년단</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 - 페이지 이동">방탄소년단</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10037969');" title="YOU NEVER WALK ALONE - 페이지 이동">YOU NEVER WALK ALONE</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="봄날 좋아요" data-song-no="30244931" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
558,911</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',30244931);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('30244931');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '30244931', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '30244931','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33623210">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Bad Habits 곡 선택" class="input_check " name="input_check" value="33623210"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">66</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10637411');" title="=" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/37/411/10637411_20211028175937_500.jpg/melon/resize/120/quality/80/optimize" alt="= - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33623210');" title="Bad Habits 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33623210);" title="Bad Habits 재생">Bad Habits</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('549800');" title="Ed Sheeran - 페이지 이동">Ed Sheeran</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('549800');" title="Ed Sheeran - 페이지 이동">Ed Sheeran</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10637411');" title="= - 페이지 이동">=</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Bad Habits 좋아요" data-song-no="33623210" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
110,260</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33623210);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33623210');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33623210', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33623210','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33239419">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Celebrity 곡 선택" class="input_check " name="input_check" value="33239419"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">67</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10554246');" title="IU 5th Album 'LILAC'" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/105/54/246/10554246_20210325161233_500.jpg/melon/resize/120/quality/80/optimize" alt="IU 5th Album 'LILAC' - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33239419');" title="Celebrity 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33239419);" title="Celebrity 재생">Celebrity</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('261143');" title="아이유 - 페이지 이동">아이유</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('261143');" title="아이유 - 페이지 이동">아이유</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10554246');" title="IU 5th Album 'LILAC' - 페이지 이동">IU 5th Album 'LILAC'</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Celebrity 좋아요" data-song-no="33239419" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
317,942</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33239419);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33239419');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33239419', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33239419','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33808429">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="abcdefu 곡 선택" class="input_check " name="input_check" value="33808429"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">68</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10681625');" title="abcdefu" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/81/625/10681625_20210817102109_500.jpg/melon/resize/120/quality/80/optimize" alt="abcdefu - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33808429');" title="abcdefu 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="19세 미만 청소년 이용불가" class="bullet_icons age_19"><span class="none">19금</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33808429);" title="abcdefu 재생">abcdefu</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2853095');" title="GAYLE - 페이지 이동">GAYLE</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2853095');" title="GAYLE - 페이지 이동">GAYLE</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10681625');" title="abcdefu - 페이지 이동">abcdefu</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="abcdefu 좋아요" data-song-no="33808429" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
90,976</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33808429);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33808429');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33808429', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33808429','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34632789">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="너, 너 (N번째 연애 X 휘인 (Whee In)) 곡 선택" class="input_check " name="input_check" value="34632789"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">69</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10865624');" title="너, 너 (N번째 연애 X 휘인 (Whee In))" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/65/624/10865624_20220211143033_500.jpg/melon/resize/120/quality/80/optimize" alt="너, 너 (N번째 연애 X 휘인 (Whee In)) - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34632789');" title="너, 너 (N번째 연애 X 휘인 (Whee In)) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34632789);" title="너, 너 (N번째 연애 X 휘인 (Whee In)) 재생">너, 너 (N번째 연애 X 휘인 (Whee In))</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('756533');" title="휘인 (Whee In) - 페이지 이동">휘인 (Whee In)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('756533');" title="휘인 (Whee In) - 페이지 이동">휘인 (Whee In)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10865624');" title="너, 너 (N번째 연애 X 휘인 (Whee In)) - 페이지 이동">너, 너 (N번째 연애 X 휘인 (Whee In))</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="너, 너 (N번째 연애 X 휘인 (Whee In)) 좋아요" data-song-no="34632789" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
36,036</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34632789);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34632789');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34632789', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34632789','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34808386">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Real Love 곡 선택" class="input_check " name="input_check" value="34808386"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">70</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10901248');" title="Real Love" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/01/248/10901248_20220328110949_500.jpg/melon/resize/120/quality/80/optimize" alt="Real Love - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34808386');" title="Real Love 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34808386);" title="Real Love 재생">Real Love</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('857994');" title="오마이걸 (OH MY GIRL) - 페이지 이동">오마이걸 (OH MY GIRL)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('857994');" title="오마이걸 (OH MY GIRL) - 페이지 이동">오마이걸 (OH MY GIRL)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10901248');" title="Real Love - 페이지 이동">Real Love</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Real Love 좋아요" data-song-no="34808386" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
35,093</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34808386);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34808386');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34808386', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34808386','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33061995">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="밤하늘의 별을(2020) 곡 선택" class="input_check " name="input_check" value="33061995"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">71</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10518234');" title="밤하늘의 별을(2020)" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/105/18/234/10518234_20210216102853_500.jpg/melon/resize/120/quality/80/optimize" alt="밤하늘의 별을(2020) - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33061995');" title="밤하늘의 별을(2020) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33061995);" title="밤하늘의 별을(2020) 재생">밤하늘의 별을(2020)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('994005');" title="경서 - 페이지 이동">경서</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('994005');" title="경서 - 페이지 이동">경서</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10518234');" title="밤하늘의 별을(2020) - 페이지 이동">밤하늘의 별을(2020)</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="밤하늘의 별을(2020) 좋아요" data-song-no="33061995" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
187,652</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33061995);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33061995');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33061995', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33061995','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33976677">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="찰나가 영원이 될 때 (The Eternal Moment) 곡 선택" class="input_check " name="input_check" value="33976677"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">72</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10716174');" title="Red Moon : Beyond The Light" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/107/16/174/10716174_20210916153439_500.jpg/melon/resize/120/quality/80/optimize" alt="Red Moon : Beyond The Light - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33976677');" title="찰나가 영원이 될 때 (The Eternal Moment) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33976677);" title="찰나가 영원이 될 때 (The Eternal Moment) 재생">찰나가 영원이 될 때 (The Eternal Moment)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('566431');" title="마크툽 (MAKTUB) - 페이지 이동">마크툽 (MAKTUB)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('566431');" title="마크툽 (MAKTUB) - 페이지 이동">마크툽 (MAKTUB)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10716174');" title="Red Moon : Beyond The Light - 페이지 이동">Red Moon : Beyond The Light</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="찰나가 영원이 될 때 (The Eternal Moment) 좋아요" data-song-no="33976677" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
58,882</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33976677);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33976677');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33976677', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '33976677','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33448767">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="문득 곡 선택" class="input_check " name="input_check" value="33448767"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">73</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="2단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">2</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10601149');" title="Bipolar" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/01/149/10601149_20210430171555_500.jpg/melon/resize/120/quality/80/optimize" alt="Bipolar - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33448767');" title="문득 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33448767);" title="문득 재생">문득</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2758756');" title="BE'O (비오) - 페이지 이동">BE'O (비오)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2758756');" title="BE'O (비오) - 페이지 이동">BE'O (비오)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10601149');" title="Bipolar - 페이지 이동">Bipolar</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="문득 좋아요" data-song-no="33448767" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
100,042</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33448767);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33448767');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33448767', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '33448767','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33998510">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="My Universe 곡 선택" class="input_check " name="input_check" value="33998510"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">74</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10720913');" title="My Universe" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/107/20/913/10720913_20210923173742_500.jpg/melon/resize/120/quality/80/optimize" alt="My Universe - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33998510');" title="My Universe 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33998510);" title="My Universe 재생">My Universe</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('100260');" title="Coldplay - 페이지 이동">Coldplay</a>, <a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 - 페이지 이동">방탄소년단</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('100260');" title="Coldplay - 페이지 이동">Coldplay</a>, <a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 - 페이지 이동">방탄소년단</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<div class="wrap_atist" style="display:none;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" title="아티스트 더보기" class="button_icons etc more_down" data-control="dropdown"><span class="none">아티스트명 더보기</span></button>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="atist_view" style="display:none;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="javascript:melon.link.goArtistDetail('100260');" title="Coldplay 페이지 이동" class="ellipsis">Coldplay</a></li>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 페이지 이동" class="ellipsis">방탄소년단</a></li>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10720913');" title="My Universe - 페이지 이동">My Universe</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="My Universe 좋아요" data-song-no="33998510" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
156,132</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33998510);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33998510');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33998510', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33998510','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="32183386">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Blueming 곡 선택" class="input_check " name="input_check" value="32183386"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">75</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10346650');" title="Love poem" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/103/46/650/10346650_500.jpg/melon/resize/120/quality/80/optimize" alt="Love poem - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('32183386');" title="Blueming 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',32183386);" title="Blueming 재생">Blueming</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('261143');" title="아이유 - 페이지 이동">아이유</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('261143');" title="아이유 - 페이지 이동">아이유</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10346650');" title="Love poem - 페이지 이동">Love poem</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Blueming 좋아요" data-song-no="32183386" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
335,597</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',32183386);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('32183386');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '32183386', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '32183386','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33359725">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="사이렌 Remix (Feat. UNEDUCATED KID, Paul Blanco) 곡 선택" class="input_check " name="input_check" value="33359725"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">76</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10580227');" title="사이렌 Remix" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/105/80/227/10580227_20210319163608_500.jpg/melon/resize/120/quality/80/optimize" alt="사이렌 Remix - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33359725');" title="사이렌 Remix (Feat. UNEDUCATED KID, Paul Blanco) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33359725);" title="사이렌 Remix (Feat. UNEDUCATED KID, Paul Blanco) 재생">사이렌 Remix (Feat. UNEDUCATED KID, Paul Blanco)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2754623');" title="호미들 - 페이지 이동">호미들</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2754623');" title="호미들 - 페이지 이동">호미들</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10580227');" title="사이렌 Remix - 페이지 이동">사이렌 Remix</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="사이렌 Remix (Feat. UNEDUCATED KID, Paul Blanco) 좋아요" data-song-no="33359725" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
139,815</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33359725);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33359725');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33359725', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '33359725','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34436674">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Dreams Come True 곡 선택" class="input_check " name="input_check" value="34436674"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">77</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10818396');" title="Dreams Come True - SM STATION" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/18/396/10818396_20211220135618_500.jpg/melon/resize/120/quality/80/optimize" alt="Dreams Come True - SM STATION - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34436674');" title="Dreams Come True 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34436674);" title="Dreams Come True 재생">Dreams Come True</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('2899555');" title="aespa - 페이지 이동">aespa</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('2899555');" title="aespa - 페이지 이동">aespa</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10818396');" title="Dreams Come True - SM STATION - 페이지 이동">Dreams Come True - SM STATION</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Dreams Come True 좋아요" data-song-no="34436674" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
90,054</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34436674);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34436674');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34436674', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34436674','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34701996">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="어제처럼 곡 선택" class="input_check " name="input_check" value="34701996"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">78</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10880605');" title="어제처럼" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/80/605/10880605_20220225153355_500.jpg/melon/resize/120/quality/80/optimize" alt="어제처럼 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34701996');" title="어제처럼 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34701996);" title="어제처럼 재생">어제처럼</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('752425');" title="폴킴 - 페이지 이동">폴킴</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('752425');" title="폴킴 - 페이지 이동">폴킴</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10880605');" title="어제처럼 - 페이지 이동">어제처럼</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="어제처럼 좋아요" data-song-no="34701996" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
34,709</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34701996);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34701996');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34701996', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34701996','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33868791">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="고백 곡 선택" class="input_check " name="input_check" value="33868791"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">79</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10695590');" title="세 번째 '고백'" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/95/590/10695590_20210827162225_500.jpg/melon/resize/120/quality/80/optimize" alt="세 번째 '고백' - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33868791');" title="고백 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33868791);" title="고백 재생">고백</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('839732');" title="멜로망스 - 페이지 이동">멜로망스</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('839732');" title="멜로망스 - 페이지 이동">멜로망스</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10695590');" title="세 번째 '고백' - 페이지 이동">세 번째 '고백'</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="고백 좋아요" data-song-no="33868791" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
77,291</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33868791);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33868791');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33868791', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33868791','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="30962526">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="모든 날, 모든 순간 (Every day, Every Moment) 곡 선택" class="input_check " name="input_check" value="30962526"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">80</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10149492');" title="'키스 먼저 할까요?' OST Part.3" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm/album/images/101/49/492/10149492_500.jpg/melon/resize/120/quality/80/optimize" alt="'키스 먼저 할까요?' OST Part.3 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('30962526');" title="모든 날, 모든 순간 (Every day, Every Moment) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',30962526);" title="모든 날, 모든 순간 (Every day, Every Moment) 재생">모든 날, 모든 순간 (Every day, Every Moment)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('752425');" title="폴킴 - 페이지 이동">폴킴</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('752425');" title="폴킴 - 페이지 이동">폴킴</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10149492');" title="'키스 먼저 할까요?' OST Part.3 - 페이지 이동">'키스 먼저 할까요?' OST Part.3</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="모든 날, 모든 순간 (Every day, Every Moment) 좋아요" data-song-no="30962526" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
391,703</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',30962526);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('30962526');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '30962526', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '30962526','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34943241">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="With you 곡 선택" class="input_check " name="input_check" value="34943241"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">81</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10929466');" title="우리들의 블루스 OST Part 4" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/29/466/10929466_20220422145303_500.jpg/melon/resize/120/quality/80/optimize" alt="우리들의 블루스 OST Part 4 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34943241');" title="With you 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34943241);" title="With you 재생">With you</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('725985');" title="지민 - 페이지 이동">지민</a>, <a href="javascript:melon.link.goArtistDetail('875152');" title="하성운 - 페이지 이동">하성운</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('725985');" title="지민 - 페이지 이동">지민</a>, <a href="javascript:melon.link.goArtistDetail('875152');" title="하성운 - 페이지 이동">하성운</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<div class="wrap_atist" style="display:none;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" title="아티스트 더보기" class="button_icons etc more_down" data-control="dropdown"><span class="none">아티스트명 더보기</span></button>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="atist_view" style="display:none;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="javascript:melon.link.goArtistDetail('725985');" title="지민 페이지 이동" class="ellipsis">지민</a></li>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="javascript:melon.link.goArtistDetail('875152');" title="하성운 페이지 이동" class="ellipsis">하성운</a></li>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10929466');" title="우리들의 블루스 OST Part 4 - 페이지 이동">우리들의 블루스 OST Part 4</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="With you 좋아요" data-song-no="34943241" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
41,210</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34943241);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34943241');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34943241', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34943241','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33359309">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Off My Face 곡 선택" class="input_check " name="input_check" value="33359309"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">82</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10580103');" title="Justice (The Complete Edition)" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/105/80/103/10580103_20211008114642_500.jpg/melon/resize/120/quality/80/optimize" alt="Justice (The Complete Edition) - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33359309');" title="Off My Face 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33359309);" title="Off My Face 재생">Off My Face</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('420621');" title="Justin Bieber - 페이지 이동">Justin Bieber</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('420621');" title="Justin Bieber - 페이지 이동">Justin Bieber</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10580103');" title="Justice (The Complete Edition) - 페이지 이동">Justice (The Complete Edition)</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Off My Face 좋아요" data-song-no="33359309" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
117,932</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33359309);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33359309');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33359309', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33359309','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34298496">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="만남은 쉽고 이별은 어려워 (Feat. Leellamarz) (Prod. TOIL) 곡 선택" class="input_check " name="input_check" value="34298496"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">83</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10784974');" title="쇼미더머니 10 Episode 3" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/107/84/974/10784974_20211119152051_500.jpg/melon/resize/120/quality/80/optimize" alt="쇼미더머니 10 Episode 3 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34298496');" title="만남은 쉽고 이별은 어려워 (Feat. Leellamarz) (Prod. TOIL) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34298496);" title="만남은 쉽고 이별은 어려워 (Feat. Leellamarz) (Prod. TOIL) 재생">만남은 쉽고 이별은 어려워 (Feat. Leellamarz) (Prod. TOIL)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('241227');" title="베이식 (Basick) - 페이지 이동">베이식 (Basick)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('241227');" title="베이식 (Basick) - 페이지 이동">베이식 (Basick)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10784974');" title="쇼미더머니 10 Episode 3 - 페이지 이동">쇼미더머니 10 Episode 3</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="만남은 쉽고 이별은 어려워 (Feat. Leellamarz) (Prod. TOIL) 좋아요" data-song-no="34298496" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
117,150</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34298496);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34298496');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34298496', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34298496','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33464805">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Dun Dun Dance 곡 선택" class="input_check " name="input_check" value="33464805"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">84</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10604729');" title="Dear OHMYGIRL" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/04/729/10604729_20210510143932_500.jpg/melon/resize/120/quality/80/optimize" alt="Dear OHMYGIRL - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33464805');" title="Dun Dun Dance 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33464805);" title="Dun Dun Dance 재생">Dun Dun Dance</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('857994');" title="오마이걸 (OH MY GIRL) - 페이지 이동">오마이걸 (OH MY GIRL)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('857994');" title="오마이걸 (OH MY GIRL) - 페이지 이동">오마이걸 (OH MY GIRL)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10604729');" title="Dear OHMYGIRL - 페이지 이동">Dear OHMYGIRL</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Dun Dun Dance 좋아요" data-song-no="33464805" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
156,980</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33464805);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33464805');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33464805', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33464805','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="30287019">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="롤린 (Rollin') 곡 선택" class="input_check " name="input_check" value="30287019"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">85</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10043575');" title="Rollin'" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/100/43/575/10043575_20210302112520_500.jpg/melon/resize/120/quality/80/optimize" alt="Rollin' - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('30287019');" title="롤린 (Rollin') 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',30287019);" title="롤린 (Rollin') 재생">롤린 (Rollin')</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('531700');" title="브레이브걸스 - 페이지 이동">브레이브걸스</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('531700');" title="브레이브걸스 - 페이지 이동">브레이브걸스</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10043575');" title="Rollin' - 페이지 이동">Rollin'</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="롤린 (Rollin') 좋아요" data-song-no="30287019" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
293,374</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',30287019);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('30287019');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '30287019', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '30287019','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33503722">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="헤픈 우연 곡 선택" class="input_check " name="input_check" value="33503722"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">86</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="3단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">3</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10611845');" title="HAPPEN" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/11/845/10611845_20210520170350_500.jpg/melon/resize/120/quality/80/optimize" alt="HAPPEN - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33503722');" title="헤픈 우연 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33503722);" title="헤픈 우연 재생">헤픈 우연</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('751611');" title="헤이즈 (Heize) - 페이지 이동">헤이즈 (Heize)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('751611');" title="헤이즈 (Heize) - 페이지 이동">헤이즈 (Heize)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10611845');" title="HAPPEN - 페이지 이동">HAPPEN</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="헤픈 우연 좋아요" data-song-no="33503722" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
174,604</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33503722);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33503722');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33503722', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33503722','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34875798">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="너의 번호를 누르고 곡 선택" class="input_check " name="input_check" value="34875798"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">87</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10916997');" title="너의 번호를 누르고" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/16/997/10916997_20220414162900_500.jpg/melon/resize/120/quality/80/optimize" alt="너의 번호를 누르고 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34875798');" title="너의 번호를 누르고 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34875798);" title="너의 번호를 누르고 재생">너의 번호를 누르고</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('735094');" title="김나영 - 페이지 이동">김나영</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('735094');" title="김나영 - 페이지 이동">김나영</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10916997');" title="너의 번호를 누르고 - 페이지 이동">너의 번호를 누르고</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="너의 번호를 누르고 좋아요" data-song-no="34875798" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
13,238</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34875798);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34875798');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34875798', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34875798','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="35009233">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="FEARLESS 곡 선택" class="input_check " name="input_check" value="35009233"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">88</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10939458');" title="FEARLESS" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/39/458/10939458_20220502123814_500.jpg/melon/resize/120/quality/80/optimize" alt="FEARLESS - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('35009233');" title="FEARLESS 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',35009233);" title="FEARLESS 재생">FEARLESS</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('3092950');" title="LE SSERAFIM (르세라핌) - 페이지 이동">LE SSERAFIM (르세라핌)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('3092950');" title="LE SSERAFIM (르세라핌) - 페이지 이동">LE SSERAFIM (르세라핌)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10939458');" title="FEARLESS - 페이지 이동">FEARLESS</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="FEARLESS 좋아요" data-song-no="35009233" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
13,853</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',35009233);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('35009233');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '35009233', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '35009233','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34997080">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="감동이야 (feat. 성시경) 곡 선택" class="input_check " name="input_check" value="34997080"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">89</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="2단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">2</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10937474');" title="싸다9" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/37/474/10937474_20220428225312_500.jpg/melon/resize/120/quality/80/optimize" alt="싸다9 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34997080');" title="감동이야 (feat. 성시경) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34997080);" title="감동이야 (feat. 성시경) 재생">감동이야 (feat. 성시경)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('3865');" title="싸이 (PSY) - 페이지 이동">싸이 (PSY)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('3865');" title="싸이 (PSY) - 페이지 이동">싸이 (PSY)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10937474');" title="싸다9 - 페이지 이동">싸다9</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="감동이야 (feat. 성시경) 좋아요" data-song-no="34997080" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
6,956</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34997080);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34997080');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34997080', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34997080','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="32061975">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="어떻게 이별까지 사랑하겠어, 널 사랑하는 거지 곡 선택" class="input_check " name="input_check" value="32061975"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">90</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10331947');" title="항해" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/103/31/947/10331947_500.jpg/melon/resize/120/quality/80/optimize" alt="항해 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('32061975');" title="어떻게 이별까지 사랑하겠어, 널 사랑하는 거지 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',32061975);" title="어떻게 이별까지 사랑하겠어, 널 사랑하는 거지 재생">어떻게 이별까지 사랑하겠어, 널 사랑하는 거지</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('712452');" title="AKMU (악뮤) - 페이지 이동">AKMU (악뮤)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('712452');" title="AKMU (악뮤) - 페이지 이동">AKMU (악뮤)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10331947');" title="항해 - 페이지 이동">항해</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="어떻게 이별까지 사랑하겠어, 널 사랑하는 거지 좋아요" data-song-no="32061975" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
380,078</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',32061975);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('32061975');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '32061975', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '32061975','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34190739">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="나는 트로트가 싫어요 곡 선택" class="input_check " name="input_check" value="34190739"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">91</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10758782');" title="별거 없던 그 하루로" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/107/58/782/10758782_20211101111650_500.jpg/melon/resize/120/quality/80/optimize" alt="별거 없던 그 하루로 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34190739');" title="나는 트로트가 싫어요 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34190739);" title="나는 트로트가 싫어요 재생">나는 트로트가 싫어요</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('1142');" title="임창정 - 페이지 이동">임창정</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('1142');" title="임창정 - 페이지 이동">임창정</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10758782');" title="별거 없던 그 하루로 - 페이지 이동">별거 없던 그 하루로</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="나는 트로트가 싫어요 좋아요" data-song-no="34190739" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
23,517</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34190739);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34190739');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34190739', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34190739','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="33725775">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="낙하 (with 아이유) 곡 선택" class="input_check " name="input_check" value="33725775"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">92</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10661658');" title="NEXT EPISODE" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/106/61/658/10661658_20210726111159_500.jpg/melon/resize/120/quality/80/optimize" alt="NEXT EPISODE - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('33725775');" title="낙하 (with 아이유) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',33725775);" title="낙하 (with 아이유) 재생">낙하 (with 아이유)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('712452');" title="AKMU (악뮤) - 페이지 이동">AKMU (악뮤)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('712452');" title="AKMU (악뮤) - 페이지 이동">AKMU (악뮤)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10661658');" title="NEXT EPISODE - 페이지 이동">NEXT EPISODE</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="낙하 (with 아이유) 좋아요" data-song-no="33725775" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
171,263</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',33725775);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('33725775');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '33725775', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '33725775','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34373632">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="서랍 곡 선택" class="input_check " name="input_check" value="34373632"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">93</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10804190');" title="그 해 우리는 OST Part.1" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/04/190/10804190_20211210110205_500.jpg/melon/resize/120/quality/80/optimize" alt="그 해 우리는 OST Part.1 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34373632');" title="서랍 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34373632);" title="서랍 재생">서랍</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('468244');" title="10CM - 페이지 이동">10CM</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('468244');" title="10CM - 페이지 이동">10CM</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10804190');" title="그 해 우리는 OST Part.1 - 페이지 이동">그 해 우리는 OST Part.1</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="서랍 좋아요" data-song-no="34373632" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
56,372</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34373632);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34373632');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34373632', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34373632','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34632361">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Starlight 곡 선택" class="input_check " name="input_check" value="34632361"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">94</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="1단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">1</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10865475');" title="스물다섯 스물하나 OST Part 1" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/65/475/10865475_20220211125700_500.jpg/melon/resize/120/quality/80/optimize" alt="스물다섯 스물하나 OST Part 1 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34632361');" title="Starlight 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34632361);" title="Starlight 재생">Starlight</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('944650');" title="태일 (TAEIL) - 페이지 이동">태일 (TAEIL)</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('944650');" title="태일 (TAEIL) - 페이지 이동">태일 (TAEIL)</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10865475');" title="스물다섯 스물하나 OST Part 1 - 페이지 이동">스물다섯 스물하나 OST Part 1</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Starlight 좋아요" data-song-no="34632361" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
61,894</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34632361);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34632361');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34632361', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34632361','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34808759">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="버퍼링 (Glitch Mode) 곡 선택" class="input_check " name="input_check" value="34808759"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">95</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10901349');" title="Glitch Mode - The 2nd Album" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/01/349/10901349_20220328124314_500.jpg/melon/resize/120/quality/80/optimize" alt="Glitch Mode - The 2nd Album - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34808759');" title="버퍼링 (Glitch Mode) 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34808759);" title="버퍼링 (Glitch Mode) 재생">버퍼링 (Glitch Mode)</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('1066419');" title="NCT DREAM - 페이지 이동">NCT DREAM</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('1066419');" title="NCT DREAM - 페이지 이동">NCT DREAM</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10901349');" title="Glitch Mode - The 2nd Album - 페이지 이동">Glitch Mode - The 2nd Album</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="버퍼링 (Glitch Mode) 좋아요" data-song-no="34808759" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
71,860</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34808759);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34808759');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34808759', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34808759','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34959675">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="LOVE 곡 선택" class="input_check " name="input_check" value="34959675"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">96</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="2단계 상승" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_up"><span class="none">단계 상승</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="up">2</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10932098');" title="SHAPE of LOVE" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/32/098/10932098_20220426110407_500.jpg/melon/resize/120/quality/80/optimize" alt="SHAPE of LOVE - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34959675');" title="LOVE 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34959675);" title="LOVE 재생">LOVE</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('791216');" title="몬스타엑스 - 페이지 이동">몬스타엑스</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('791216');" title="몬스타엑스 - 페이지 이동">몬스타엑스</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10932098');" title="SHAPE of LOVE - 페이지 이동">SHAPE of LOVE</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="LOVE 좋아요" data-song-no="34959675" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
25,638</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34959675);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34959675');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34959675', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34959675','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34461065">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Christmas Tree 곡 선택" class="input_check " name="input_check" value="34461065"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">97</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10823566');" title="그 해 우리는 OST Part.5" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/23/566/10823566_20211224141829_500.jpg/melon/resize/120/quality/80/optimize" alt="그 해 우리는 OST Part.5 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34461065');" title="Christmas Tree 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34461065);" title="Christmas Tree 재생">Christmas Tree</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('725989');" title="V - 페이지 이동">V</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('725989');" title="V - 페이지 이동">V</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10823566');" title="그 해 우리는 OST Part.5 - 페이지 이동">그 해 우리는 OST Part.5</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Christmas Tree 좋아요" data-song-no="34461065" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
90,935</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34461065);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34461065');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34461065', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34461065','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34726097">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="내 생에 아름다운 곡 선택" class="input_check " name="input_check" value="34726097"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">98</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="2단계 하락" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_down"><span class="none">단계 하락</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="down">2</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10885094');" title="내 생에 아름다운" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/108/85/094/10885094_20220304150116_500.jpg/melon/resize/120/quality/80/optimize" alt="내 생에 아름다운 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34726097');" title="내 생에 아름다운 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34726097);" title="내 생에 아름다운 재생">내 생에 아름다운</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('718655');" title="이예준 - 페이지 이동">이예준</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('718655');" title="이예준 - 페이지 이동">이예준</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10885094');" title="내 생에 아름다운 - 페이지 이동">내 생에 아름다운</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="내 생에 아름다운 좋아요" data-song-no="34726097" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
24,780</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34726097);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34726097');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34726097', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video disabled" disabled="disabled" onclick="melon.link.goMvDetail('1000002721', '34726097','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="34904578">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="Darl+ing 곡 선택" class="input_check " name="input_check" value="34904578"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">99</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10922231');" title="Darl+ing" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/22/231/10922231_20220415102124_500.jpg/melon/resize/120/quality/80/optimize" alt="Darl+ing - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('34904578');" title="Darl+ing 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',34904578);" title="Darl+ing 재생">Darl+ing</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('861436');" title="세븐틴 - 페이지 이동">세븐틴</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('861436');" title="세븐틴 - 페이지 이동">세븐틴</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10922231');" title="Darl+ing - 페이지 이동">Darl+ing</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="Darl+ing 좋아요" data-song-no="34904578" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
42,594</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',34904578);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('34904578');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '34904578', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '34904578','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t<tr class="lst100" id="lst100" data-song-no="35014621">
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_right"><input type="checkbox" title="초대 곡 선택" class="input_check " name="input_check" value="35014621"></div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center"><span class="rank ">100</span><span class="none">위</span></div></td>
\t\t
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t<!-- 차트순위 추가 -->
\t\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<span title="순위 동일" class="rank_wrap">
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="bullet_icons rank_static"><span class="none">순위 동일</span></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="none">0</span>
\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t
\t\t
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10940426');" title="초대" class="image_typeAll">
\t\t\t\t\t\t\t\t\t\t\t<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="60" height="60" src="https://cdnimg.melon.co.kr/cm2/album/images/109/40/426/10940426_20220503100932_500.jpg/melon/resize/120/quality/80/optimize" alt="초대 - 페이지 이동">
\t\t\t\t\t\t\t\t\t\t\t<span class="bg_album_frame"></span>
\t\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goSongDetail('35014621');" title="초대 곡정보" class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank01"><span>
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.play.playSong('1000002721',35014621);" title="초대 재생">초대</a>
\t\t\t\t\t\t\t\t\t\t\t</span></div><br>
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank02">
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goArtistDetail('839732');" title="멜로망스 - 페이지 이동">멜로망스</a><span class="checkEllipsis" style="display: none;"><a href="javascript:melon.link.goArtistDetail('839732');" title="멜로망스 - 페이지 이동">멜로망스</a></span>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<div class="wrap_song_info">
\t\t\t\t\t\t\t\t\t\t\t<div class="ellipsis rank03">
\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:melon.link.goAlbumDetail('10940426');" title="초대 - 페이지 이동">초대</a>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap">
\t\t\t\t\t\t\t\t\t\t<button type="button" class="button_etc like" title="초대 좋아요" data-song-no="35014621" data-song-menuid="1000002721"><span class="odd_span">좋아요</span>
<span class="cnt">
<span class="none">총건수</span>
7,484</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="듣기" class="button_icons play " onclick="melon.play.playSong('1000002721',35014621);"><span class="none">듣기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="담기" class="button_icons scrap " onclick="melon.play.addPlayList('35014621');"><span class="none">담기</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="다운로드" class="button_icons download " onclick="melon.buy.goBuyProduct('frm', '35014621', '3C0001', '','0', '1000002721');"><span class="none">다운로드</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t\t<td><div class="wrap t_center">
\t\t\t\t\t\t\t\t\t\t<button type="button" title="뮤직비디오" class="button_icons video " onclick="melon.link.goMvDetail('1000002721', '35014621','song');"><span class="none">뮤직비디오</span></button>
\t\t\t\t\t\t\t\t\t</div></td>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t

\t\t\t</tbody>
\t\t</table>
\t</div>`;
