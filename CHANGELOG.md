# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.5](https://bitbucket.org/bearests/211218-bearests-api/compare/v2.0.4...v2.0.5) (2023-04-12)

### [2.0.4](https://bitbucket.org/bearests/211218-bearests-api/compare/v2.0.3...v2.0.4) (2023-04-05)

### [2.0.3](https://bitbucket.org/bearests/211218-bearests-api/compare/v2.0.2...v2.0.3) (2023-03-29)

### [2.0.2](https://bitbucket.org/bearests/211218-bearests-api/compare/v2.0.1...v2.0.2) (2023-03-28)


### Bug Fixes

* 修正 getLastStartTime row 判斷 ([87158d5](https://bitbucket.org/bearests/211218-bearests-api/commit/87158d55cf4d6de23e488f4fa619e3f90e59e030))

### [2.0.1](https://bitbucket.org/bearests/211218-bearests-api/compare/v2.0.0...v2.0.1) (2023-03-28)


### Bug Fixes

* 修正 dockerfile nodejs 改為 18.13.0 ([8caf65d](https://bitbucket.org/bearests/211218-bearests-api/commit/8caf65d8684719133513e782d9f11f65c6cb6fed))

## [2.0.0](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.209...v2.0.0) (2023-03-28)


### Features

* 新增 檔案上傳功能 ([7c77ff3](https://bitbucket.org/bearests/211218-bearests-api/commit/7c77ff3224f75d1e69f06669e691377b9ccbb2b6))

### [1.0.209](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.208...v1.0.209) (2022-12-19)


### Bug Fixes

* 修正 req.user 沒有型別導致 誤判 memberId (建立團隊)錯誤 ([971d913](https://bitbucket.org/bearests/211218-bearests-api/commit/971d91398c2cb0a5b32aa0ccbb10f752b3f5d7f0))

### [1.0.208](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.207...v1.0.208) (2022-12-13)


### Bug Fixes

* 修正 project 判斷問題 ([96102ce](https://bitbucket.org/bearests/211218-bearests-api/commit/96102ce8f0d0a43ac8eb668efdef6d26aba84168))

### [1.0.207](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.206...v1.0.207) (2022-12-13)


### Bug Fixes

* 修正 一般單的 projectId 為 空白 改為 null ([6e3e5ca](https://bitbucket.org/bearests/211218-bearests-api/commit/6e3e5ca66b6244e68495b2867336c82e70bd703d))

### [1.0.206](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.205...v1.0.206) (2022-12-13)

### [1.0.205](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.204...v1.0.205) (2022-12-06)

### [1.0.204](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.203...v1.0.204) (2022-11-22)


### Bug Fixes

* 修正 封存為false ([2264f72](https://bitbucket.org/bearests/211218-bearests-api/commit/2264f724acbebcb6f812db6a77f41695eec6ff17))

### [1.0.203](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.202...v1.0.203) (2022-11-22)


### Features

* 新增 隱藏 已封存項目 ([80d449e](https://bitbucket.org/bearests/211218-bearests-api/commit/80d449e61361b4eadf05a4a56c7d3be825bc0cb6))

### [1.0.202](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.201...v1.0.202) (2022-11-21)


### Bug Fixes

* 修正 匯出ICON TSX, fill-rule -> fillRule ([5cfd713](https://bitbucket.org/bearests/211218-bearests-api/commit/5cfd713e7637af06080bc2d7fd93bdfd9217baf4))

### [1.0.201](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.200...v1.0.201) (2022-11-20)

### [1.0.200](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.199...v1.0.200) (2022-11-20)

### [1.0.199](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.198...v1.0.199) (2022-11-07)

### [1.0.198](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.197...v1.0.198) (2022-11-04)


### Features

* 更改 Project 顯示完成度 ([a07760d](https://bitbucket.org/bearests/211218-bearests-api/commit/a07760d858239fb0ba13156a0f3bc3aa1baa3df8))


### Bug Fixes

* 修正 bookmark 新增時欄位遺失 ([bde4fe5](https://bitbucket.org/bearests/211218-bearests-api/commit/bde4fe566a6c57115aa26eda2f199287bf7ec47d))

### [1.0.197](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.196...v1.0.197) (2022-11-03)

### [1.0.196](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.195...v1.0.196) (2022-11-02)


### Features

* 新增 projectId 若不是 undefined 則查詢(含空白, 前端帶null) ([6f91e3c](https://bitbucket.org/bearests/211218-bearests-api/commit/6f91e3c5fb1a1bce9f47ac00563c492ae48c33bd))


### Bug Fixes

* 修正 statusTask 排序問題 ([a593e99](https://bitbucket.org/bearests/211218-bearests-api/commit/a593e99bd2134c47ca1832d14ee0e9fa6b873075))
* 修正 新增Task類別判斷成Fix ([330ae4b](https://bitbucket.org/bearests/211218-bearests-api/commit/330ae4b847ed4e11b0f3f57eae654f8a12258a8e))
* 修正 未加入團隊的成員無法看到專案項目 ([ea69185](https://bitbucket.org/bearests/211218-bearests-api/commit/ea69185ef217f753944d0989171070a5df984cd1))

### [1.0.195](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.194...v1.0.195) (2022-11-02)


### Features

* 新增 statusWaitConfirm 狀態 ([1cc0827](https://bitbucket.org/bearests/211218-bearests-api/commit/1cc0827f95417d942d3392fb1ee9e7e412141eb8))

### [1.0.194](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.193...v1.0.194) (2022-10-31)


### Bug Fixes

* 修正 worklog team 顯示錯誤 ([842ac52](https://bitbucket.org/bearests/211218-bearests-api/commit/842ac5216452bad664520ddad9e7f0014217081c))

### [1.0.193](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.192...v1.0.193) (2022-10-30)


### Features

* 新增 Workspace contorller 加入 owner 才看到的 ([a8066c9](https://bitbucket.org/bearests/211218-bearests-api/commit/a8066c9709da89953a5ceb2f99ad08e3340e19df))

### [1.0.192](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.191...v1.0.192) (2022-10-30)

### [1.0.191](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.190...v1.0.191) (2022-10-29)


### Features

* 更改 新增任務單類別對應 ([9ab273d](https://bitbucket.org/bearests/211218-bearests-api/commit/9ab273d8fd446b448ce7cc3bf3a75c971881405e))

### [1.0.190](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.189...v1.0.190) (2022-10-28)


### Features

* 新增 檔案上傳紀錄檔案大小 ([21831a3](https://bitbucket.org/bearests/211218-bearests-api/commit/21831a3577da735e1473d5b6725e31166f13caf7))
* 新增 設定封面圖功能 ([483fdc5](https://bitbucket.org/bearests/211218-bearests-api/commit/483fdc5fc7a3860276eff53f4dd117103dcb503a))

### [1.0.189](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.188...v1.0.189) (2022-10-26)

### [1.0.188](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.187...v1.0.188) (2022-10-26)

### [1.0.187](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.186...v1.0.187) (2022-10-26)


### Bug Fixes

* 修正 Gitlab Webhook ([0221478](https://bitbucket.org/bearests/211218-bearests-api/commit/02214785c218952aafef3aa963ffd63fc9effb25))

### [1.0.186](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.185...v1.0.186) (2022-10-26)


### Bug Fixes

* 修正 Webhook 判斷錯誤 ([a0585a0](https://bitbucket.org/bearests/211218-bearests-api/commit/a0585a01c9c675313294e233ce9c76314d4917e1))

### [1.0.185](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.184...v1.0.185) (2022-10-26)


### Features

* 刪除 dockerfile usermode ([15a3ebc](https://bitbucket.org/bearests/211218-bearests-api/commit/15a3ebcad8972003d7192665ee3e9a59ace9ad8a))

### [1.0.184](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.183...v1.0.184) (2022-10-25)


### Bug Fixes

* 修正 dockerfile groupmod not found ([3461eb2](https://bitbucket.org/bearests/211218-bearests-api/commit/3461eb20ad6ca9782ce4e8a3b40a56a02e0bc186))

### [1.0.183](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.182...v1.0.183) (2022-10-25)


### Features

* 更改 dockerfile 加入 999 node user, group ([cd877b0](https://bitbucket.org/bearests/211218-bearests-api/commit/cd877b0977c79ca01227741618b2761a857c101a))

### [1.0.182](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.181...v1.0.182) (2022-10-25)


### Features

* 新增 查詢專案報價單任務表 ([beb903f](https://bitbucket.org/bearests/211218-bearests-api/commit/beb903f9c4b2f511dd5be4dda95282a42a23dac9))

### [1.0.181](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.180...v1.0.181) (2022-10-24)

### [1.0.180](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.179...v1.0.180) (2022-10-24)

### [1.0.179](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.178...v1.0.179) (2022-10-24)

### [1.0.178](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.177...v1.0.178) (2022-10-24)

### [1.0.177](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.176...v1.0.177) (2022-10-24)

### [1.0.176](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.175...v1.0.176) (2022-10-20)


### Features

* 新增 Task 多加 ProjectId ([c833314](https://bitbucket.org/bearests/211218-bearests-api/commit/c83331457ca23e69b724ab9715780fa3bcb44707))
* 新增 團隊回傳 workspaceId ([a095a56](https://bitbucket.org/bearests/211218-bearests-api/commit/a095a56e6214e77ba3e001fb0c6a01eae10b2987))
* 新增 獨立 Workspace 查詢的 Setting ([4be7bb9](https://bitbucket.org/bearests/211218-bearests-api/commit/4be7bb9b64a0984f01d23364382871cc112493bb))

### [1.0.175](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.174...v1.0.175) (2022-10-20)


### Bug Fixes

* 修正 depot deviceId 選擇可為空, 轉為NULL ([2ba89fe](https://bitbucket.org/bearests/211218-bearests-api/commit/2ba89fe3486300c0ec4f953c56fb963523ad108d))

### [1.0.174](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.173...v1.0.174) (2022-10-19)

### [1.0.173](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.172...v1.0.173) (2022-10-19)


### Bug Fixes

* 修正 icon upload fs 引入需改為 * as fs ([1cdd567](https://bitbucket.org/bearests/211218-bearests-api/commit/1cdd56795a4ca8fda2765d486e2587e7106325c4))
* 修正 webhook 路徑設定 ([fc2a016](https://bitbucket.org/bearests/211218-bearests-api/commit/fc2a0168c041fb4adb9d3213c4f34668ebd4bd6b))

### [1.0.172](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.171...v1.0.172) (2022-10-18)


### Features

* 更改 Task狀態更改為Done, 更新 DoneAt 時間 ([693f58f](https://bitbucket.org/bearests/211218-bearests-api/commit/693f58f51911307f3877421b1ef816885171b079))

### [1.0.171](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.170...v1.0.171) (2022-10-18)

### [1.0.170](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.169...v1.0.170) (2022-10-18)

### [1.0.169](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.168...v1.0.169) (2022-10-17)

### [1.0.168](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.167...v1.0.168) (2022-10-17)

### [1.0.167](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.166...v1.0.167) (2022-10-17)

### [1.0.166](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.165...v1.0.166) (2022-10-17)


### Features

* 新增 Bookmark ([992290d](https://bitbucket.org/bearests/211218-bearests-api/commit/992290d8a55c1dc1cb82cb4c27b1371780f5869c))

### [1.0.165](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.164...v1.0.165) (2022-10-17)


### Features

* 更改 Project 增加 workspaceId 查詢 ([ab3415e](https://bitbucket.org/bearests/211218-bearests-api/commit/ab3415ee31db1e81281580d386ae6b3213f9ca8f))

### [1.0.164](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.163...v1.0.164) (2022-10-17)


### Features

* 新增 Team 加入 workspace 搜尋 ([4051366](https://bitbucket.org/bearests/211218-bearests-api/commit/40513669829cc9f78672e5517da698be0a9dbc9d))


### Bug Fixes

* 修正 status task 查詢Raw 透過RawSqlResultsToEntityTransformer 導致卡住程序 ([fcf8503](https://bitbucket.org/bearests/211218-bearests-api/commit/fcf85036cc88bc8f7f7c39f25a38fc5bcb1745a2))

### [1.0.163](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.162...v1.0.163) (2022-10-16)


### Features

* 優化 statusTask 合併查詢 ([c34027d](https://bitbucket.org/bearests/211218-bearests-api/commit/c34027d1bddd8d8313053284d7c0af71e7bb585b))

### [1.0.162](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.161...v1.0.162) (2022-10-16)


### Features

* 更改 預估日期查詢 ([d356840](https://bitbucket.org/bearests/211218-bearests-api/commit/d356840a6615936083eeea08e59af429249813e7))

### [1.0.161](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.160...v1.0.161) (2022-10-15)


### Features

* 新增 Workspace ([89c4c80](https://bitbucket.org/bearests/211218-bearests-api/commit/89c4c805ad582ccac4c9ea83ed6389744143bb2f))

### [1.0.160](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.159...v1.0.160) (2022-10-14)

### [1.0.159](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.158...v1.0.159) (2022-10-14)

### [1.0.158](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.157...v1.0.158) (2022-10-14)

### [1.0.157](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.156...v1.0.157) (2022-10-14)

### [1.0.156](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.155...v1.0.156) (2022-10-14)

### [1.0.155](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.154...v1.0.155) (2022-10-14)


### Bug Fixes

* 修正 google oauth encodeQueryString 更改需要手動加入? ([a3441aa](https://bitbucket.org/bearests/211218-bearests-api/commit/a3441aacc63bdd620e8b0b1b9c21aac85e453ace))

### [1.0.154](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.153...v1.0.154) (2022-10-13)


### Features

* 新增 Webhook 前端相關畫面資料取得 ([f422db1](https://bitbucket.org/bearests/211218-bearests-api/commit/f422db1b54eb1d8985ea8bee56b4468617d54128))

### [1.0.153](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.152...v1.0.153) (2022-10-13)

### [1.0.152](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.151...v1.0.152) (2022-10-13)


### Features

* 新增 webhookToken 檢查 ([b7b3af3](https://bitbucket.org/bearests/211218-bearests-api/commit/b7b3af33ba40835bd90b5849f8291db246d6380a))

### [1.0.151](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.150...v1.0.151) (2022-10-13)


### Features

* 新增 gitlab webhook merge request ([0ea29bf](https://bitbucket.org/bearests/211218-bearests-api/commit/0ea29bf0da41cfef967838a2e1fdf37cef0e7912))

### [1.0.150](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.149...v1.0.150) (2022-10-13)


### Features

* 新增 webhook 測試 ([237363c](https://bitbucket.org/bearests/211218-bearests-api/commit/237363c87bf2b4c9816e7f43a2d844f81f821f4d))

### [1.0.149](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.148...v1.0.149) (2022-10-12)


### Features

* 新增 子任務顯示功能 ([dd9f92e](https://bitbucket.org/bearests/211218-bearests-api/commit/dd9f92ea3d893d897daafae4a9a095403fa5e3a2))

### [1.0.148](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.147...v1.0.148) (2022-10-12)

### [1.0.147](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.146...v1.0.147) (2022-10-11)


### Features

* 新增 專案新增刪除修改 ([27d5710](https://bitbucket.org/bearests/211218-bearests-api/commit/27d5710336f93b1557cb7d806b3850a23aa2a6cc))

### [1.0.146](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.145...v1.0.146) (2022-10-11)

### [1.0.145](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.144...v1.0.145) (2022-10-05)


### Bug Fixes

* 修正 錯誤訊息處理 ([7700c1b](https://bitbucket.org/bearests/211218-bearests-api/commit/7700c1be500b8d07408152b3ab61964ce4da1245))

### [1.0.144](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.143...v1.0.144) (2022-10-04)


### Bug Fixes

* 修正 錯誤處理判斷instanceof SystemException ([f09f3c2](https://bitbucket.org/bearests/211218-bearests-api/commit/f09f3c2fa9b5d514bc5527aff27d47e572bf4519))

### [1.0.143](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.142...v1.0.143) (2022-10-03)


### Features

* 新增 icon搜尋code功能 ([c122fc6](https://bitbucket.org/bearests/211218-bearests-api/commit/c122fc673a7d112647ad0464c0e1d654c3d574f5))

### [1.0.142](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.141...v1.0.142) (2022-10-03)


### Bug Fixes

* 修正 Icon 檔案上傳名稱命名問題 ([f591e21](https://bitbucket.org/bearests/211218-bearests-api/commit/f591e211282cc2a45e9589b270fa6862ad21f67a))

### [1.0.141](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.140...v1.0.141) (2022-10-03)


### Bug Fixes

* 修正 下載svg component 格式錯誤 ([7be32ef](https://bitbucket.org/bearests/211218-bearests-api/commit/7be32ef762ab7bd53739d3b6785184d886b7a034))

### [1.0.140](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.139...v1.0.140) (2022-10-03)


### Bug Fixes

* 修正 開始計時錢的停止計時, 帶入使用者參數錯誤 ([7138eae](https://bitbucket.org/bearests/211218-bearests-api/commit/7138eae427a9043428b48f2849fd95b5efa6ae4a))

### [1.0.139](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.138...v1.0.139) (2022-10-03)


### Features

* 新增 刪除所有icon測試 ([bce117e](https://bitbucket.org/bearests/211218-bearests-api/commit/bce117ebefd36b0428f51a9aa0c8f525d97d6f31))

### [1.0.138](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.137...v1.0.138) (2022-09-30)


### Features

* 修正 圖片壓縮發送問題發送問題, 返回縮圖網址錯誤, apisauce 改為 axios ([c9a827a](https://bitbucket.org/bearests/211218-bearests-api/commit/c9a827ae1815efc169652889b2375b14214b3e51))

### [1.0.137](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.136...v1.0.137) (2022-09-26)


### Features

* 新增 刪除專案Icon功能 ([adc79db](https://bitbucket.org/bearests/211218-bearests-api/commit/adc79dbc3c8cdd96b119dcae15cfa10bc808b8b7))


### Bug Fixes

* 修正 projectIcon projectId, code 改為 unique ([0ea49d0](https://bitbucket.org/bearests/211218-bearests-api/commit/0ea49d0eaf7a2e3a7160a03b020d95d2eb072de5))

### [1.0.136](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.135...v1.0.136) (2022-09-26)


### Features

* 新增 Icon檔案下載 ([63f3173](https://bitbucket.org/bearests/211218-bearests-api/commit/63f31734bd52ef1c4cfd9fdc99e377b74700cee2))

### [1.0.135](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.134...v1.0.135) (2022-09-25)


### Features

* 新增 專案Icon SVG上傳功能 ([33efc53](https://bitbucket.org/bearests/211218-bearests-api/commit/33efc533c16993a8c0927befabe9c2f9c014ea12))

### [1.0.134](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.133...v1.0.134) (2022-09-22)


### Features

* 新增 project icon ([1c66e00](https://bitbucket.org/bearests/211218-bearests-api/commit/1c66e008737fc132f3d82667db7c4b5dd8f7a2be))

### [1.0.133](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.132...v1.0.133) (2022-09-21)

### [1.0.132](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.131...v1.0.132) (2022-09-16)

### [1.0.131](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.130...v1.0.131) (2022-09-15)


### Bug Fixes

* 修正 Project 外部鍵 Device Table 結構改為 SET NULL ([4f9982a](https://bitbucket.org/bearests/211218-bearests-api/commit/4f9982a2eb455ced3089c547206bb23a82f0e368))
* 修正 團隊 取得專案 innerJoin 改為 leftJoin project ([738ca38](https://bitbucket.org/bearests/211218-bearests-api/commit/738ca38542b74464e1a3fb202c8ecd77c06dff12))

### [1.0.130](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.129...v1.0.130) (2022-09-15)


### Features

* 新增 裝置版本小圖示 ([a0ca3da](https://bitbucket.org/bearests/211218-bearests-api/commit/a0ca3da82b4908554e08e674c108225f2b65b106))

### [1.0.129](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.128...v1.0.129) (2022-09-15)

### [1.0.128](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.127...v1.0.128) (2022-09-14)


### Bug Fixes

* 修正 關閉 sync dbSchema ([f00c472](https://bitbucket.org/bearests/211218-bearests-api/commit/f00c47244295122cf3bf7e47b9c622e2220c3235))

### [1.0.127](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.126...v1.0.127) (2022-09-14)


### Bug Fixes

* 修正 filters add HttpException base ([368a8c2](https://bitbucket.org/bearests/211218-bearests-api/commit/368a8c28036a3c6a92c21f349fa4a72941adb8c1))

### [1.0.126](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.125...v1.0.126) (2022-09-12)

### [1.0.125](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.124...v1.0.125) (2022-09-09)


### Features

* 新增 工作紀錄查詢 有日期的部分 ([8688228](https://bitbucket.org/bearests/211218-bearests-api/commit/86882289c22acb3918918b763bc439f9551f6814))

### [1.0.124](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.123...v1.0.124) (2022-09-08)

### [1.0.123](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.122...v1.0.123) (2022-09-08)


### Bug Fixes

* 修正 notice detail 資料表名稱 ([01b2e9d](https://bitbucket.org/bearests/211218-bearests-api/commit/01b2e9de1fc1a2a88c5562d56a08db5bc6767d05))

### [1.0.122](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.121...v1.0.122) (2022-09-08)

### [1.0.121](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.120...v1.0.121) (2022-09-07)


### Bug Fixes

* 修正 checkExistsNoHour getQuery 帶入參數問題 ([5e3b788](https://bitbucket.org/bearests/211218-bearests-api/commit/5e3b788a95c1ed3641e43310f7ebe67d00553927))

### [1.0.120](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.119...v1.0.120) (2022-09-07)


### Bug Fixes

* 修正 工作日誌條件 where 蓋掉下一個where, 新增錄影紀錄的檢查問題 ([798e830](https://bitbucket.org/bearests/211218-bearests-api/commit/798e830475422baf21eea2e5ed12b712358def68))

### [1.0.119](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.118...v1.0.119) (2022-09-07)


### Bug Fixes

* 修正 workLog page dto 使用到 共用導致 teamRoot 未提供共用的 queryString ([d871a28](https://bitbucket.org/bearests/211218-bearests-api/commit/d871a2869784d6c5582e84cc1081d1d5b509b549))

### [1.0.118](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.117...v1.0.118) (2022-09-06)


### Features

* 新增 工作日誌刪除 新增 ([cc18c90](https://bitbucket.org/bearests/211218-bearests-api/commit/cc18c90b414748ea04e9882e6cc7bc48dcf5b7d7))

### [1.0.117](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.116...v1.0.117) (2022-09-06)


### Features

* 更改 工作日誌 時間格式(日跟時間拆開) ([f69191c](https://bitbucket.org/bearests/211218-bearests-api/commit/f69191c038f0b7ca38c59f592db0c5c5c0534289))

### [1.0.116](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.115...v1.0.116) (2022-09-05)

### [1.0.115](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.114...v1.0.115) (2022-09-05)

### [1.0.114](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.113...v1.0.114) (2022-09-04)


### Bug Fixes

* 修正 assignMember 外部鍵 onDelete set NULL ([fc368cb](https://bitbucket.org/bearests/211218-bearests-api/commit/fc368cbf21b94e59722098381a8e3ea9beba0e9e))

### [1.0.113](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.112...v1.0.113) (2022-09-04)


### Bug Fixes

* 修正 進行中的工作單 查詢條件 ([b98df0a](https://bitbucket.org/bearests/211218-bearests-api/commit/b98df0a9d7f93590ad08b9cd7815dbb4b13cd874))

### [1.0.112](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.111...v1.0.112) (2022-09-04)


### Features

* 更改 指派成員改為一位 (多位容易影響報表設計) ([607101c](https://bitbucket.org/bearests/211218-bearests-api/commit/607101cbd18ca4fa6be6b4f10e6f1e69d1cb4e12))

### [1.0.111](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.110...v1.0.111) (2022-09-04)


### Features

* 新增 工作日誌列表查詢功能 ([7f19384](https://bitbucket.org/bearests/211218-bearests-api/commit/7f19384feb7c522be465dde9b2c40832bc760565))
* 新增 時數新增檢查不可有0的紀錄 ([3e018b4](https://bitbucket.org/bearests/211218-bearests-api/commit/3e018b44ce60f22bfae68466cb89b1c28a930360))
* 新增 標記為重要的項目 欄位 ([a820077](https://bitbucket.org/bearests/211218-bearests-api/commit/a820077cc2e898babb31305d1f4391c7621db955))
* 新增 重要任務查詢 ([97f1b68](https://bitbucket.org/bearests/211218-bearests-api/commit/97f1b682089dc30f3b9a94b1fa2de28d914c37d0))


### Bug Fixes

* 修正 更改工作紀錄時間 不在取得總計 ([1a1bb0e](https://bitbucket.org/bearests/211218-bearests-api/commit/1a1bb0ebb038d6dc06abc387fa07eb0ef045fb6a))

### [1.0.110](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.109...v1.0.110) (2022-09-04)


### Features

* 新增 增加刪除WorkLog功能 ([bfcd403](https://bitbucket.org/bearests/211218-bearests-api/commit/bfcd4033bd494500afa2d3a74c34832a10bc16fc))

### [1.0.109](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.108...v1.0.109) (2022-09-04)


### Features

* 新增 工作紀錄取得資料欄位, 回傳總時數 ([306fc22](https://bitbucket.org/bearests/211218-bearests-api/commit/306fc22c20f62df89a09e01f33bd201b80ba6130))
* 新增 工作記錄時間編輯 ([3057e50](https://bitbucket.org/bearests/211218-bearests-api/commit/3057e50deac70d1811cd1bedf95391248b735357))

### [1.0.108](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.107...v1.0.108) (2022-09-03)


### Features

* 新增 更改 紀錄工作 更新欄位 ([1529590](https://bitbucket.org/bearests/211218-bearests-api/commit/15295905bbeb2613d92ec4a38cc460e380636486))

### [1.0.107](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.106...v1.0.107) (2022-09-02)

### [1.0.106](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.105...v1.0.106) (2022-09-01)

### [1.0.105](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.104...v1.0.105) (2022-08-31)


### Bug Fixes

* 修正 工作列表 查詢條件錯誤 ([4a8073f](https://bitbucket.org/bearests/211218-bearests-api/commit/4a8073f9c5392e12df9fcffe1bd6c0a80e1d41c7))

### [1.0.104](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.103...v1.0.104) (2022-08-31)


### Bug Fixes

* 修正 查詢條件設定為登入者 導致查詢不到 ([bacbbe5](https://bitbucket.org/bearests/211218-bearests-api/commit/bacbbe5c05cf1b059eecf03d673d38ad7d86cd96))

### [1.0.103](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.102...v1.0.103) (2022-08-31)

### [1.0.102](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.101...v1.0.102) (2022-08-31)


### Bug Fixes

* 修正 job.doneWorktime ([b2a457f](https://bitbucket.org/bearests/211218-bearests-api/commit/b2a457f05476cbb90635bbfa97e34871e592580f))

### [1.0.101](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.100...v1.0.101) (2022-08-31)


### Features

* 新增 列表額外查詢統計時數 ([dafc70c](https://bitbucket.org/bearests/211218-bearests-api/commit/dafc70cfc8e51138de24890fa784a2573dd36ea9))
* 新增 更改 回傳時間, 更改不判斷錯誤 ([204caa3](https://bitbucket.org/bearests/211218-bearests-api/commit/204caa3a536d1f89a14dc408f8431669f4e8641c))

### [1.0.100](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.99...v1.0.100) (2022-08-31)


### Bug Fixes

* 修正 查詢條件 andWhere 不能使用 subQb 方法直接使用 ([4c54b27](https://bitbucket.org/bearests/211218-bearests-api/commit/4c54b27703e53f3fb5bf86cfc45ace9b572998be))

### [1.0.99](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.98...v1.0.99) (2022-08-30)


### Bug Fixes

* 修正 subQuery addSelect 需要 take 1, 不然多筆時 導致 mysql 語法錯誤 ([f1c0476](https://bitbucket.org/bearests/211218-bearests-api/commit/f1c0476daf1d813f7554eadb1d7b52813bded7a3))

### [1.0.98](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.97...v1.0.98) (2022-08-30)


### Features

* 新增 process 取得資料方法 ([c17114c](https://bitbucket.org/bearests/211218-bearests-api/commit/c17114c2904b9790ef2f62cbfb543ba80894366a))

### [1.0.97](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.96...v1.0.97) (2022-08-30)


### Features

* 新增 晚上6點自動關閉所有計時中狀態, 並結算 ([7155ad8](https://bitbucket.org/bearests/211218-bearests-api/commit/7155ad8af954bf4d9dda371aa6d110cc92652cad))

### [1.0.96](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.95...v1.0.96) (2022-08-30)


### Bug Fixes

* 修正 刪除 workLog.content 欄位刪除 ([3a41dfe](https://bitbucket.org/bearests/211218-bearests-api/commit/3a41dfe489c39874aed5be063e0272ff768cb444))

### [1.0.95](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.94...v1.0.95) (2022-08-30)


### Features

* 新增 登入時重新同步可以看到的專案列表 ([ce339a7](https://bitbucket.org/bearests/211218-bearests-api/commit/ce339a78902a447b45f06be083e089c69e344483))

### [1.0.94](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.93...v1.0.94) (2022-08-30)


### Features

* 新增 工時紀錄功能 ([7d9fbda](https://bitbucket.org/bearests/211218-bearests-api/commit/7d9fbda0f46360629da5a8b8ab09e0b161626232))
* 更改 優先度 notmal -> medium ([eaaf03e](https://bitbucket.org/bearests/211218-bearests-api/commit/eaaf03e85a785adc625f03417176c2cc5a75159f))
* 關閉 同步DB ([f44389a](https://bitbucket.org/bearests/211218-bearests-api/commit/f44389af9ddc68c318ebbf45d2aa2a8c73b44927))

### [1.0.93](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.92...v1.0.93) (2022-08-29)


### Features

* 新增 批次更新狀態的方法 ([d3f5f90](https://bitbucket.org/bearests/211218-bearests-api/commit/d3f5f90d09f37b49b025b4c4c9057e9b26d8ea81))

### [1.0.92](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.91...v1.0.92) (2022-08-29)


### Features

* 新增 待合併分支狀態 ([b217f7f](https://bitbucket.org/bearests/211218-bearests-api/commit/b217f7f3f250a9db41028a4045c23e57bd3840a2))

### [1.0.91](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.90...v1.0.91) (2022-08-29)


### Features

* 更改 回傳專案列表 teamName 與 projectName 分開 ([fb07438](https://bitbucket.org/bearests/211218-bearests-api/commit/fb074382cbe4e032417df8d3abb949e875232e5a))

### [1.0.90](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.89...v1.0.90) (2022-08-28)


### Features

* 更改 列表查詢樣式, 不獨立 ([37caa1e](https://bitbucket.org/bearests/211218-bearests-api/commit/37caa1ed6869e8dda676e55179d3f997d7fe80f0))

### [1.0.89](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.88...v1.0.89) (2022-08-27)


### Bug Fixes

* 修正 工作單 更新預估日期, 若為空白則改為 null ([ad13d88](https://bitbucket.org/bearests/211218-bearests-api/commit/ad13d88932f6050cd7a2948347248bfdab921c55))

### [1.0.88](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.87...v1.0.88) (2022-08-26)


### Features

* 新增 刪除專案頭像功能 ([bea7e3d](https://bitbucket.org/bearests/211218-bearests-api/commit/bea7e3dd9d6097b3cc75ff35ed4b200bf4748f49))

### [1.0.87](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.86...v1.0.87) (2022-08-26)


### Features

* 新增 暫停狀態 ([a46c523](https://bitbucket.org/bearests/211218-bearests-api/commit/a46c5234237cf596379d011a0af9084bee1782d4))

### [1.0.86](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.85...v1.0.86) (2022-08-26)


### Features

* 新增 複製工作單功能 ([0ef5571](https://bitbucket.org/bearests/211218-bearests-api/commit/0ef5571e14c0e17b104a4ba6722b5184f5d6afa8))

### [1.0.85](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.84...v1.0.85) (2022-08-25)


### Features

* 新增 Project AvatarUrl ([5da748d](https://bitbucket.org/bearests/211218-bearests-api/commit/5da748dbca79dbf006f6beafa3f217a34c643339))

### [1.0.84](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.83...v1.0.84) (2022-08-25)


### Features

* 新增 工作單列表 leftjoin device ([ebd41d7](https://bitbucket.org/bearests/211218-bearests-api/commit/ebd41d7695a9bb281a2e2e621400c0e9e93d66f8))
* 新增 複製工作單功能 ([503fc0b](https://bitbucket.org/bearests/211218-bearests-api/commit/503fc0bd2a4965c1c76bb7a36a2e2711e1066fc4))

### [1.0.83](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.82...v1.0.83) (2022-08-25)


### Bug Fixes

* 修正 團隊列表回傳金額 ([f48b872](https://bitbucket.org/bearests/211218-bearests-api/commit/f48b8729f93613eaead0835309968a0a9e5c0abd))

### [1.0.82](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.81...v1.0.82) (2022-08-25)


### Features

* 新增 成員在團隊中的每小時價值欄位, 更新方法, 錯誤方法code ([522553c](https://bitbucket.org/bearests/211218-bearests-api/commit/522553cfb5a0483e1bc632cc57a5b7782528d645))

### [1.0.81](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.80...v1.0.81) (2022-08-24)


### Features

* 新增 在新增專案的時候 重新Cache ([36c90e9](https://bitbucket.org/bearests/211218-bearests-api/commit/36c90e9f5ff0a3d771ed02e4f2f309228959ece5))

### [1.0.80](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.79...v1.0.80) (2022-08-24)


### Bug Fixes

* 修正 預估工時, 實際工時, 數字0 判定同 undefined ([efdfda5](https://bitbucket.org/bearests/211218-bearests-api/commit/efdfda5a76b48137178a9aec4470ec8e8c335618))

### [1.0.79](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.78...v1.0.79) (2022-08-24)


### Features

* 新增 實際完工時 ([39e577e](https://bitbucket.org/bearests/211218-bearests-api/commit/39e577e2c4fa1b3a6c6a39c9b5a892ccf70b70b1))

### [1.0.78](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.77...v1.0.78) (2022-08-23)

### [1.0.77](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.76...v1.0.77) (2022-08-23)


### Features

* 新增 工作單排序功能 ([8edd4f2](https://bitbucket.org/bearests/211218-bearests-api/commit/8edd4f2007ac32a0d5dccd953bddf557b8b87ab1))

### [1.0.76](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.75...v1.0.76) (2022-08-22)


### Features

* 新增 建立問題單的時候, 偵測標題 自動對應 類別(優化,需求, 修正) ([b84c773](https://bitbucket.org/bearests/211218-bearests-api/commit/b84c7736aef38d24c001f2aa7e6569c6b5acaf72))
* 新增 建立工作單, 預設成員為自己 ([a987e75](https://bitbucket.org/bearests/211218-bearests-api/commit/a987e75e4f3c493ffad91d43798a364dd99b7c3f))
* 更改 job檔案上傳限制為5MB ([603e05e](https://bitbucket.org/bearests/211218-bearests-api/commit/603e05e49deb3c48fdeb80ca63699287e7984683))

### [1.0.75](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.74...v1.0.75) (2022-08-22)


### Bug Fixes

* 修正 檔案上傳 client ([b98454c](https://bitbucket.org/bearests/211218-bearests-api/commit/b98454c626543be1dc6861df60a404e9df5e0520))

### [1.0.74](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.73...v1.0.74) (2022-08-21)

### [1.0.73](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.72...v1.0.73) (2022-08-21)


### Features

* 新增 刪除頭像 ([42e4eba](https://bitbucket.org/bearests/211218-bearests-api/commit/42e4eba2125d979a5fd8a00be6f8327625a0e34d))
* 新增 團隊頭像刪除 ([f58ddd2](https://bitbucket.org/bearests/211218-bearests-api/commit/f58ddd20062f52998eb7f162444d3224be82fee0))

### [1.0.72](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.71...v1.0.72) (2022-08-21)


### Features

* 新增 刪除工作單功能 ([ed7b9b5](https://bitbucket.org/bearests/211218-bearests-api/commit/ed7b9b56bf6dfe716c0d3b14ee0858708166469e))

### [1.0.71](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.70...v1.0.71) (2022-08-21)

### [1.0.70](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.69...v1.0.70) (2022-08-20)


### Bug Fixes

* fix filterFilenameUTF8 name replace fail ([14149f4](https://bitbucket.org/bearests/211218-bearests-api/commit/14149f4efddec24b53b291a9d0145037004c89ab))

### [1.0.69](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.68...v1.0.69) (2022-08-20)


### Bug Fixes

* 修正 uploadService formData error ([1c43d40](https://bitbucket.org/bearests/211218-bearests-api/commit/1c43d40b42b410fb1a41e208e74de7f19642fd42))

### [1.0.68](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.67...v1.0.68) (2022-08-20)


### Features

* 更改 圖片壓縮改為第三方服務 ([f917bed](https://bitbucket.org/bearests/211218-bearests-api/commit/f917bed76a7fa0cd96767d165ab9a0bb19e9c4df))

### [1.0.67](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.66...v1.0.67) (2022-08-19)

### [1.0.66](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.65...v1.0.66) (2022-08-19)

### [1.0.65](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.64...v1.0.65) (2022-08-19)

### [1.0.64](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.63...v1.0.64) (2022-08-19)

### [1.0.63](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.62...v1.0.63) (2022-08-19)

### [1.0.62](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.61...v1.0.62) (2022-08-19)

### [1.0.61](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.60...v1.0.61) (2022-08-19)

### [1.0.60](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.59...v1.0.60) (2022-08-18)

### [1.0.59](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.58...v1.0.59) (2022-08-18)

### [1.0.58](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.57...v1.0.58) (2022-08-18)


### Bug Fixes

* 修正 docker file 打包問題 can't execute 'bash': No such file or directory ([98de056](https://bitbucket.org/bearests/211218-bearests-api/commit/98de0569a03bc75c0e445828c842f5f375bbcafc))

### [1.0.57](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.56...v1.0.57) (2022-08-18)

### [1.0.56](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.55...v1.0.56) (2022-08-18)


### Features

* 調整 新增工作單 ([b02d7db](https://bitbucket.org/bearests/211218-bearests-api/commit/b02d7db430de65385b7116ec9dede43807b98797))

### [1.0.55](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.54...v1.0.55) (2022-08-17)


### Features

* 新增 工作單檔案上傳大小限制 ([7ba3be0](https://bitbucket.org/bearests/211218-bearests-api/commit/7ba3be0637ba7c4642af9a160ceeb66a47847f46))


### Bug Fixes

* 修正 不使用jimp, 改為自己封裝的 bear-node-imagemin ([1fbd7ec](https://bitbucket.org/bearests/211218-bearests-api/commit/1fbd7ece3b2bf1bd11ce8c0ab77c2aa4b704018a))

### [1.0.54](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.53...v1.0.54) (2022-08-16)

### [1.0.53](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.52...v1.0.53) (2022-08-15)


### Bug Fixes

* 修正 伺服器 PORT 無法送出 ([95b10f4](https://bitbucket.org/bearests/211218-bearests-api/commit/95b10f43752ee15a44825a3738958be4a844185a))

### [1.0.52](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.51...v1.0.52) (2022-08-15)


### Bug Fixes

* 修正 package.json type  移動到 dep ([b33c01d](https://bitbucket.org/bearests/211218-bearests-api/commit/b33c01da5e8af3b7b80a0a9464712d40241f9d29))

### [1.0.51](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.50...v1.0.51) (2022-08-15)


### Bug Fixes

* 修正 Mail Bull 設定錯誤 未改回傳型別 ([f1ec565](https://bitbucket.org/bearests/211218-bearests-api/commit/f1ec565cfdb6d2caac005af36ff5561112512e4b))

### [1.0.50](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.49...v1.0.50) (2022-08-15)


### Features

* 新增 發送郵件到貯列 ([4f6d4c5](https://bitbucket.org/bearests/211218-bearests-api/commit/4f6d4c59e01e812f7f2c92fc8d6084582ca4e69b))

### [1.0.49](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.48...v1.0.49) (2022-08-15)


### Features

* 新增 檔案更改功能 ([5589336](https://bitbucket.org/bearests/211218-bearests-api/commit/5589336bb9a1f905163c2db8872c46b2afb5c15a))

### [1.0.48](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.47...v1.0.48) (2022-08-15)


### Features

* 修正 檔案上傳中文名稱亂碼, 多轉為utf8 ([104d86a](https://bitbucket.org/bearests/211218-bearests-api/commit/104d86a45fd5b2225cc15dc9f2173894bc2eb5ef))

### [1.0.47](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.46...v1.0.47) (2022-08-14)


### Features

* 新增 工作單, 檔案上傳功能 ([4292863](https://bitbucket.org/bearests/211218-bearests-api/commit/4292863aea01169913442ae879a8713b4c06d5f5))
* 新增 檔案刪除, 查詢檔案 ([141307f](https://bitbucket.org/bearests/211218-bearests-api/commit/141307f6dd5f9cbe0729793ebdcf401eacd001e5))

### [1.0.46](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.45...v1.0.46) (2022-08-11)

### [1.0.45](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.44...v1.0.45) (2022-08-11)


### Features

* 新增 刪除專案功能 ([f94e41e](https://bitbucket.org/bearests/211218-bearests-api/commit/f94e41e572d01c5cc388b5b29ead2be37b4723f6))
* 新增 加入團隊通知信 ([a80d113](https://bitbucket.org/bearests/211218-bearests-api/commit/a80d113576fbf7ba50de11744febb6f46c4d075f))
* 新增 更改密碼功能 ([7d26eda](https://bitbucket.org/bearests/211218-bearests-api/commit/7d26edafe18854c6ab97daa07008438e878f6e82))
* 新增 無法刪除自己的功能 ([504e651](https://bitbucket.org/bearests/211218-bearests-api/commit/504e651bd65acd116053005992a6f84c2ca8c157))
* 更改 測試裝置Icon改到前端 ([e53dc34](https://bitbucket.org/bearests/211218-bearests-api/commit/e53dc34a12519ce46ef9973d6276d0e3720b55ff))


### Bug Fixes

* docker下运行Mysql出现：mbind: Operation not permitted ([9c3a692](https://bitbucket.org/bearests/211218-bearests-api/commit/9c3a69207394aaac2042b6a8f1ab604b35d18460))
* 修正 欄位已刪除錯誤 ([2e013f2](https://bitbucket.org/bearests/211218-bearests-api/commit/2e013f2e7cec86dde69bebe3f25774edded2d2ca))

### [1.0.44](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.43...v1.0.44) (2022-08-07)


### Bug Fixes

* 修正 上傳路徑錯誤問題 ([1b84c94](https://bitbucket.org/bearests/211218-bearests-api/commit/1b84c9439b7453f2bc77da523debbb0a40fe09b1))

### [1.0.43](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.42...v1.0.43) (2022-08-07)

### [1.0.42](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.41...v1.0.42) (2022-08-07)

### [1.0.41](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.40...v1.0.41) (2022-08-07)


### Bug Fixes

* 修正 mail templates 路徑 ([a0d8339](https://bitbucket.org/bearests/211218-bearests-api/commit/a0d8339c27d21e7bed96743d28286376dad5548e))

### [1.0.40](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.39...v1.0.40) (2022-08-07)


### Bug Fixes

* 修正 路徑相對位置問題 ([8c64f24](https://bitbucket.org/bearests/211218-bearests-api/commit/8c64f24600511230f642be6062840e72fa250ae3))

### [1.0.39](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.38...v1.0.39) (2022-08-07)


### Features

* 更改 google oauth redirectUrl 加入env參數 ([bbc6874](https://bitbucket.org/bearests/211218-bearests-api/commit/bbc6874beb87d260e7a83a9587ada457cbe8e06f))

### [1.0.38](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.37...v1.0.38) (2022-08-07)


### Features

* 新增 google oauth login ([c7f9456](https://bitbucket.org/bearests/211218-bearests-api/commit/c7f945613c77a61295605aab7aa39b3d851fae84))
* 新增 Google Oauth 註冊的帳號使用隨機產生(如果建立失敗) ([7fc5e14](https://bitbucket.org/bearests/211218-bearests-api/commit/7fc5e148565719df4987e9e7a5daf033a37217dc))
* 新增 模板變數 ([1e5decb](https://bitbucket.org/bearests/211218-bearests-api/commit/1e5decbe68137083f2c0dedb7861f6509ff17361))
* 新增 登入可使用帳號或email, 並加增加格式驗證與信箱驗證欄位 ([a981b95](https://bitbucket.org/bearests/211218-bearests-api/commit/a981b95e2debca94665597470b59a6979cd250ac))
* 新增 驗證碼 ([24520c7](https://bitbucket.org/bearests/211218-bearests-api/commit/24520c776dcf5645034ee95787d76e692fa2a968))
* 更改 驗證信右下角代碼為 驗證碼ID ([d626e9f](https://bitbucket.org/bearests/211218-bearests-api/commit/d626e9f674ea422ceb343f948af6a4d008ba245a))

### [1.0.37](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.37-beta.14...v1.0.37) (2022-08-05)

### [1.0.37-beta.14](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.37-beta.13...v1.0.37-beta.14) (2022-08-03)

### [1.0.37-beta.13](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.37-beta.12...v1.0.37-beta.13) (2022-08-01)

### [1.0.37-beta.12](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.37-beta.3...v1.0.37-beta.12) (2022-08-01)

### [1.0.37-beta.3](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.37-beta.1...v1.0.37-beta.3) (2022-07-31)

### [1.0.37-beta.1](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.37-beta.0...v1.0.37-beta.1) (2022-07-31)

### [1.0.37-beta.0](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.36...v1.0.37-beta.0) (2022-07-31)

### [1.0.36](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.35...v1.0.36) (2022-01-22)


### Features

* 新增 管理員登入紀錄 ([1861183](https://bitbucket.org/bearests/211218-bearests-api/commit/1861183f3465a85b95491ea2f538509305671097))

### [1.0.35](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.34...v1.0.35) (2022-01-22)


### Features

* 新增 訂單明細 ([78e0601](https://bitbucket.org/bearests/211218-bearests-api/commit/78e0601ecdd1c88d76f75bf426e8878d24a796ce))
* 更改 庫存異動紀錄 回傳格式 ([35fe7ce](https://bitbucket.org/bearests/211218-bearests-api/commit/35fe7ce451ef40d5f8ddb5e360064ef4bfaea18d))

### [1.0.34](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.33...v1.0.34) (2022-01-21)


### Features

* 新增 前台訂單送出功能 ([846b331](https://bitbucket.org/bearests/211218-bearests-api/commit/846b3319ca612581cb8ca9cfac95a87f6ad3dfd0))
* 更改 發布設定 ([24ac9b0](https://bitbucket.org/bearests/211218-bearests-api/commit/24ac9b05a5f6878b2661ca6f48fc77b9fd0c7786))

### [1.0.33](https://bitbucket.org/bearests/211218-bearests-api/compare/v1.0.32...v1.0.33) (2022-01-21)


### Features

* 更改 發布設定 ([41005b9](https://bitbucket.org/bearests/211218-bearests-api/commit/41005b9d39b7583dfd83394c97b114fcc16adb1d))

### 1.0.32 (2022-01-21)


### Features

* 刪除 store model 相關 ([5870016](https://bitbucket.org/bearests/211218-bearests-api/commit/58700167f10443267baf0aed9b67aa13058fbbba))
* 新增 AD 相關的欄位優化, 刪除方法優化 ([66cd96c](https://bitbucket.org/bearests/211218-bearests-api/commit/66cd96c4e957c39e07bd98fd8663f684651c2b18))
* 新增 AdHome ([3957ee6](https://bitbucket.org/bearests/211218-bearests-api/commit/3957ee694a516b28d359d99cde77c6bb831bf93f))
* 新增 adinner ([1f5c8f9](https://bitbucket.org/bearests/211218-bearests-api/commit/1f5c8f9f8dcd63de6aa842f4fc0a842bdd770a39))
* 新增 blog ([270f530](https://bitbucket.org/bearests/211218-bearests-api/commit/270f5307cad7b534374a0858ab8646bbdb656392))
* 新增 eventItem ([594d593](https://bitbucket.org/bearests/211218-bearests-api/commit/594d593ca6958ae45f3bfabeb4fe026b5ef7a303))
* 新增 內頁廣告 ([3a2522f](https://bitbucket.org/bearests/211218-bearests-api/commit/3a2522f8b67a124b98ffbe71f60c5ebb14f28e62))
* 新增 公告跑馬燈 資料串接 ([9315eaa](https://bitbucket.org/bearests/211218-bearests-api/commit/9315eaaf631681c03c592a0eb596eb04b9aee38b))
* 新增 最新公告 ([8cda15a](https://bitbucket.org/bearests/211218-bearests-api/commit/8cda15a6ca771ae6c76d49d7fdaa2e1cbb5a7000))
* 新增 最新消息 ([abde666](https://bitbucket.org/bearests/211218-bearests-api/commit/abde666a70d12eae5ad5e5189f53df1bcbbb52d3))
* 新增 商品資料 ([218cec7](https://bitbucket.org/bearests/211218-bearests-api/commit/218cec742c2a2c6000d2dca702ec4c9ad576aef2))
* 新增 商品關聯的活動ID ([0a7eb87](https://bitbucket.org/bearests/211218-bearests-api/commit/0a7eb87b5e437084adced9271691941db4032cfa))
* 新增 圖片活動上傳 ([0700445](https://bitbucket.org/bearests/211218-bearests-api/commit/07004450724a7b2753a0ce4c8bb1ffd1e43438b0))
* 新增 庫存調整數量功能 ([32ebfdb](https://bitbucket.org/bearests/211218-bearests-api/commit/32ebfdbfc08bd55b1ead580684faed780d6f1aad))
* 新增 推薦文章 ([6a630f8](https://bitbucket.org/bearests/211218-bearests-api/commit/6a630f87559f65c7d5a6b2f825b0bb11ed1f8267))
* 新增 推薦文章首頁顯示資料 ([ee04f97](https://bitbucket.org/bearests/211218-bearests-api/commit/ee04f977639036c2d32146a1eab99bed9ea91976))
* 新增 活動照片 ([5d07326](https://bitbucket.org/bearests/211218-bearests-api/commit/5d073269133ee223f65362ce549fd96085f270e4))
* 新增 活動照片上傳功能 ([c08b0ed](https://bitbucket.org/bearests/211218-bearests-api/commit/c08b0edf579f6b460da028a57c01dd990aec2831))
* 新增 活動管理 ([06947da](https://bitbucket.org/bearests/211218-bearests-api/commit/06947da83a44cd8f555c3d8dcae21ba674b02cc8))
* 新增 活動管理類別 ([c19a924](https://bitbucket.org/bearests/211218-bearests-api/commit/c19a9246fc324273f20a830706c170e1f0631d5b))
* 新增 活動總覽 ([e97225f](https://bitbucket.org/bearests/211218-bearests-api/commit/e97225f4fd508bca74e5971e616403349ad18aa0))
* 新增 活動類別 ([88179f6](https://bitbucket.org/bearests/211218-bearests-api/commit/88179f63da3fbecf3515b2f3b08eceabe039c3dc))
* 新增 熱門話題 ([19223cf](https://bitbucket.org/bearests/211218-bearests-api/commit/19223cf005dfd931226f2ddf9391d3076a995813))
* 新增 編輯器專用上傳圖片 ([136085b](https://bitbucket.org/bearests/211218-bearests-api/commit/136085b7ac4306c7c15d682750e0b8fa2199eb94))
* 新增 購物車功能 ([584928a](https://bitbucket.org/bearests/211218-bearests-api/commit/584928abc77339ab1fda0c2fc01e2bc7b02010b1))
* 新增 賽事成績 篩選 ([4162f84](https://bitbucket.org/bearests/211218-bearests-api/commit/4162f84a531f36a10fdccd2b5dd7c3751bf1c737))
* 新增 賽事成績功能, 檔案上傳功能 ([340f5f1](https://bitbucket.org/bearests/211218-bearests-api/commit/340f5f12e257d45945550328d9b6e94522ae765d))
* 新增 賽事活動 ([ed64cfc](https://bitbucket.org/bearests/211218-bearests-api/commit/ed64cfc82385b56be7a77d261c01f02372ab993b))
* 新增 贊助廣告 ([d48a4e5](https://bitbucket.org/bearests/211218-bearests-api/commit/d48a4e57d45e93db6cc1cd841e424a08dfc18da6))
* 新增 贊助廣告 ([bf37ac6](https://bitbucket.org/bearests/211218-bearests-api/commit/bf37ac6d64f86dedf041cca781f2c1e7586f1eb2))
* 新增 首頁廣告 ([5f10a88](https://bitbucket.org/bearests/211218-bearests-api/commit/5f10a88576db387f7792b821639e428f7e16c04c))
* 新增 首頁熱門話題資料 ([07b1edf](https://bitbucket.org/bearests/211218-bearests-api/commit/07b1edf92c8ca9744da06acc160e3b07afd537d0))
* 更改 news ([f3881b6](https://bitbucket.org/bearests/211218-bearests-api/commit/f3881b668061176bbf78523c0911e3393c49a46d))
* 更改 package.json ([8c12f02](https://bitbucket.org/bearests/211218-bearests-api/commit/8c12f02af5df6c0d5357a5f1e56af4426253df69))
* 更改 root -> admin, 加註時區問題, 更改台灣時區 ([8e29722](https://bitbucket.org/bearests/211218-bearests-api/commit/8e297229607414f8af84b1efbc8d4ffe38000ca7))
* 更改 前台API資料串接 ([c65fae8](https://bitbucket.org/bearests/211218-bearests-api/commit/c65fae8b3514bbd9291ae8658bc7b20f6f73bba3))
* 更改 前台串接Banner資料 ([f085bdd](https://bitbucket.org/bearests/211218-bearests-api/commit/f085bdd36912630edafff6c99581ce812d4cddae))
* 更改 商品增加尺寸欄位, JSON ([ca98f11](https://bitbucket.org/bearests/211218-bearests-api/commit/ca98f118c4cd0b30e1c71ef5e657e6d159cac3d7))
* 更改 商品管理內容調整 ([5755f7b](https://bitbucket.org/bearests/211218-bearests-api/commit/5755f7b2db9774ce673bd1050c7070760209a0b0))
* 更改 圖片上傳尺寸 ([a51d217](https://bitbucket.org/bearests/211218-bearests-api/commit/a51d217633d1a814a3b489a5f7c7f40fb0493117))
* 更改 圖片檔案上傳方法 ([a05a69f](https://bitbucket.org/bearests/211218-bearests-api/commit/a05a69f045891e26b618a8ab017c441942d30cb1))
* 更改 庫存列表顯示回傳直 ([d1b27c4](https://bitbucket.org/bearests/211218-bearests-api/commit/d1b27c440166426ff0ef9604af2c3f3b4847b0b4))
* 更改 推薦文章, 並新增 刪除檔案的方法 ([04c7041](https://bitbucket.org/bearests/211218-bearests-api/commit/04c7041c15405525208c2a0eba1a1dc0673391b8))
* 更改 熱門話題 ([cb1d176](https://bitbucket.org/bearests/211218-bearests-api/commit/cb1d176691726c01ff8206075cac7b5d5a5fcf21))
* 更改 網站設定/參數設定增加可選輸入方式 ([7ca3772](https://bitbucket.org/bearests/211218-bearests-api/commit/7ca3772577dc0012b8e8ce9c88c791664cc8781f))


### Bug Fixes

* 修正 檔案刪除方法(可同時刪除檔案與資料夾) ([943a032](https://bitbucket.org/bearests/211218-bearests-api/commit/943a03207bac4d4f4d9125a3e01d763716ae4aab))

### [1.0.31](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.30...v1.0.31) (2021-05-31)


### Bug Fixes

* 修正 檔案上傳因為沒有先建立資料夾導致錯誤 ([c91f630](https://bitbucket.org/kr8851com/140404-bearests-api/commit/c91f630150c2faa480584de91d6057b82658abb8))

### [1.0.30](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.29...v1.0.30) (2021-05-31)


### Bug Fixes

* 修正 檔案上傳因為沒有先建立資料夾導致錯誤 ([f03916f](https://bitbucket.org/kr8851com/140404-bearests-api/commit/f03916f7f579786bc319b699411c40b134542764))

### [1.0.29](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.28...v1.0.29) (2021-05-31)


### Bug Fixes

* 修正 檔案上傳因為沒有先建立資料夾導致錯誤 ([cb728cd](https://bitbucket.org/kr8851com/140404-bearests-api/commit/cb728cdafb98d87ae59ae24fb7863860729707cc))

### [1.0.28](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.27...v1.0.28) (2021-05-31)


### Bug Fixes

* 修正 圖片上傳路徑問題 ([9fb16d6](https://bitbucket.org/kr8851com/140404-bearests-api/commit/9fb16d695c59b014c20ee2680471288dc1122064))

### [1.0.27](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.26...v1.0.27) (2021-05-29)


### Features

* 更改 個人資料圖片上傳改為檔案上傳 ([ccfe37b](https://bitbucket.org/kr8851com/140404-bearests-api/commit/ccfe37bc11e012d64485c918664c0b5adef6565b))


### Bug Fixes

* 修正 資料庫連線方式 不要長連接 ([9f02cd2](https://bitbucket.org/kr8851com/140404-bearests-api/commit/9f02cd2061dc41331a36063772c42d452a633eec))

### [1.0.26](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.25...v1.0.26) (2021-05-23)


### Bug Fixes

* 修正 時區問題 ([eda80dd](https://bitbucket.org/kr8851com/140404-bearests-api/commit/eda80dd344abbf7d2e4588def3a73230574029ca))

### [1.0.25](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.24...v1.0.25) (2021-05-23)


### Bug Fixes

* 修正 時區問題 ([92dc9f0](https://bitbucket.org/kr8851com/140404-bearests-api/commit/92dc9f08bebf94222e6883e7bf5dcdf21e460447))

### [1.0.24](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.23...v1.0.24) (2021-05-23)


### Features

* 更改 所有功能的 新增 更改, 都由程式端寫入新增時間與更新時間, 因主機digitalocean mysql無法設定時區 ([64ade69](https://bitbucket.org/kr8851com/140404-bearests-api/commit/64ade69e3fec8f77411d5d81c52e249b6c08130f))

### [1.0.23](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.22...v1.0.23) (2021-05-22)


### Features

* 新增 時區為 nestjs Australia/Melbourne, typeorm +10:00 ([b229baf](https://bitbucket.org/kr8851com/140404-bearests-api/commit/b229baf4a38cd4cfa0b5129787f3b3f36f087a8c))

### [1.0.22](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.21...v1.0.22) (2021-05-13)


### Features

* 更改 PDF欄位顯示判斷 ([565e809](https://bitbucket.org/kr8851com/140404-bearests-api/commit/565e8094d78b433992efc5f62ad96cf2a6300478))

### [1.0.21](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.20...v1.0.21) (2021-05-09)


### Features

* 新增 查詢MemberUser ([3e0b701](https://bitbucket.org/kr8851com/140404-bearests-api/commit/3e0b70150aa4b8fbd09e506af5288bf665b246f0))

### [1.0.20](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.19...v1.0.20) (2021-05-09)


### Bug Fixes

* 修正 JOb必填欄位改為非必填 ([e0b61c6](https://bitbucket.org/kr8851com/140404-bearests-api/commit/e0b61c6f940f5e6e0306bb7582babcbc0b3633e6))

### [1.0.19](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.18...v1.0.19) (2021-05-09)


### Features

* 新增 outboundOption 欄位 ([6737d04](https://bitbucket.org/kr8851com/140404-bearests-api/commit/6737d0474c263f9e1de1336fe02aa359a4b057e6))
* 新增 PaidToMember, isLodged, isCompleted 欄位, 搜尋功能, 統計顯示 ([5d90c0d](https://bitbucket.org/kr8851com/140404-bearests-api/commit/5d90c0d1e2ff7ae2d4f238ad476351b52245a1f2))
* 新增 即時修改功能 ([e4068b3](https://bitbucket.org/kr8851com/140404-bearests-api/commit/e4068b3898d0bb05fcb58ff33125b60ed23b2145))

### [1.0.18](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.17...v1.0.18) (2021-05-03)

### [1.0.17](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.16...v1.0.17) (2021-05-03)


### Features

* 調整 PDF 顯示 ([ba20d6a](https://bitbucket.org/kr8851com/140404-bearests-api/commit/ba20d6a381f187396415f19a4cb41ea6c387c83e))

### [1.0.16](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.15...v1.0.16) (2021-05-01)


### Features

* 刪除 Option ([436dce0](https://bitbucket.org/kr8851com/140404-bearests-api/commit/436dce00399feabc17c6c3bd7ef6312384a3b84e))

### [1.0.15](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.14...v1.0.15) (2021-04-30)


### Features

* 更改 PDF 刪除 會員額外欄位 交易類型 ([12a1041](https://bitbucket.org/kr8851com/140404-bearests-api/commit/12a1041ee7c04b23812b86bfce7cba2750f7c94f))

### [1.0.14](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.13...v1.0.14) (2021-04-30)


### Features

* 更改 Cash特例 ([68c65c5](https://bitbucket.org/kr8851com/140404-bearests-api/commit/68c65c5a545ab02c091238c6f2369ae1b6b31e8f))

### [1.0.13](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.12...v1.0.13) (2021-04-30)


### Bug Fixes

* 刪除路徑找不到時, 不顯示 ([e7b4946](https://bitbucket.org/kr8851com/140404-bearests-api/commit/e7b4946e8e51be1104142ad6270f4c41c43108f6))

### [1.0.12](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.11...v1.0.12) (2021-04-30)


### Features

* 新增 圖片上傳縮圖功能 ([b6cf93d](https://bitbucket.org/kr8851com/140404-bearests-api/commit/b6cf93d60f604cf956638f8ed9a40347e4b4bb1d))

### [1.0.11](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.10...v1.0.11) (2021-04-29)


### Features

* 更改 FullName ([dd28a43](https://bitbucket.org/kr8851com/140404-bearests-api/commit/dd28a4396216a97e3b445bb745f395aacd9f946a))

### [1.0.10](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.9...v1.0.10) (2021-04-29)


### Features

* 更改 姓 名改全名 ([6e6ac1f](https://bitbucket.org/kr8851com/140404-bearests-api/commit/6e6ac1fd4bfa3bdf6e4a7ff48a936adfcb382521))

### [1.0.9](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.8...v1.0.9) (2021-04-27)


### Features

* 更改 PDF 排版 ([a06284a](https://bitbucket.org/kr8851com/140404-bearests-api/commit/a06284a989f36ac6081d3d35ec9475003181526f))

### [1.0.8](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.7...v1.0.8) (2021-04-27)


### Features

* 更改 PDF內容 ([ad4ddd0](https://bitbucket.org/kr8851com/140404-bearests-api/commit/ad4ddd095a651211dcc4195aff72c9924ffaed85))

### [1.0.7](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.6...v1.0.7) (2021-04-27)


### Bug Fixes

* 修正 PDF Customer Data ([1e775cd](https://bitbucket.org/kr8851com/140404-bearests-api/commit/1e775cd671aae9c4a773b36a063d514b3be148b3))

### [1.0.6](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.5...v1.0.6) (2021-04-27)


### Features

* 更改 PDF Payee Account 位置 ([3794878](https://bitbucket.org/kr8851com/140404-bearests-api/commit/3794878162626deda407cd9b148d543050e13d3d))

### [1.0.5](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.4...v1.0.5) (2021-04-27)


### Features

* 新增 PDF使用的中文字行, 會員Email非必填 ([970b7af](https://bitbucket.org/kr8851com/140404-bearests-api/commit/970b7af5e2101bd6cd10595e045ba1133cef7006))

### [1.0.4](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.3...v1.0.4) (2021-04-26)


### Features

* 新增 Builder production in docker ([08b9a9a](https://bitbucket.org/kr8851com/140404-bearests-api/commit/08b9a9a364c2a9f6b161bdbb490aa0880a463e7e))
* 新增 Report功能 ([3e27976](https://bitbucket.org/kr8851com/140404-bearests-api/commit/3e279763f07827e93fe0e7c7f9557ae7f3d02ef8))
* 調整 功能 ([c8ad1e3](https://bitbucket.org/kr8851com/140404-bearests-api/commit/c8ad1e3a8676d8af5eb3e156faf7361df066d4c0))


### Bug Fixes

* 修正 管理員頭像上傳 ([4d9816e](https://bitbucket.org/kr8851com/140404-bearests-api/commit/4d9816eff6f8a5c8263fd6b13e92f0143a41cf9b))

### [1.0.3](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.2...v1.0.3) (2021-04-26)


### Features

* 調整 功能項目 ([18088ab](https://bitbucket.org/kr8851com/140404-bearests-api/commit/18088ab39caa77abaf5fa23cd3e8e378283d1dcc))

### [1.0.2](https://bitbucket.org/kr8851com/140404-bearests-api/compare/v1.0.1...v1.0.2) (2021-04-26)


### Bug Fixes

* 修正 取得圖片資源不需要登入權限 ([4f89781](https://bitbucket.org/kr8851com/140404-bearests-api/commit/4f89781892a1809c580722fa90cbeff04872a063))

### 1.0.1 (2021-04-25)


### Features

* 修正 Dashboard數據顯示 ([70441be](https://bitbucket.org/kr8851com/140404-bearests-api/commit/70441be8847a53cdc2484a565213864a7189db7c))
* 修正 交易日期查詢起始結束日期錯誤 ([791faa6](https://bitbucket.org/kr8851com/140404-bearests-api/commit/791faa663eaa470e98392f6bbce3d5a05e6140ac))
* 修正 首頁輪播未帶版本導致快取不更新 ([5c9ff17](https://bitbucket.org/kr8851com/140404-bearests-api/commit/5c9ff1737972ea64f0f5aa61235edb2010da38a1))
* 新增 PDF下載接口 ([595a76a](https://bitbucket.org/kr8851com/140404-bearests-api/commit/595a76a509842030c23f8d8f064fa63737391cd9))
* 新增 release 設定 ([4fd47b3](https://bitbucket.org/kr8851com/140404-bearests-api/commit/4fd47b35ea75423738adbb477881d2b372950bb2))
* 新增 SINSANG列隊 ([c5f0fe1](https://bitbucket.org/kr8851com/140404-bearests-api/commit/c5f0fe1b83ce6a1a9b3c0a3fb82adb21a4362a7d))
* 新增 交易紀錄查詢可以改備注 ([ef6ac05](https://bitbucket.org/kr8851com/140404-bearests-api/commit/ef6ac054eb23587bc1dffb62a5825750a81df09e))
* 新增 使用者上傳圖片功能 ([c96b347](https://bitbucket.org/kr8851com/140404-bearests-api/commit/c96b347bff252cbd862133e26057cbe7dd82d640))
* 新增 使用者權限控制 ([d93348c](https://bitbucket.org/kr8851com/140404-bearests-api/commit/d93348c4e6bc9bd16832eb86fb7184a0f38ae042))
* 新增 個人訊息, 會員有新增圖片的話, 可顯示圖片並可放大 ([ad87c66](https://bitbucket.org/kr8851com/140404-bearests-api/commit/ad87c667e00eeaff57987eb7b2f3daf936806765))
* 新增 備貨查詢增加顯示若有庫存提示黃色金嘆號(在備貨中並且非庫存下單時才顯示) ([905456a](https://bitbucket.org/kr8851com/140404-bearests-api/commit/905456a4a16a826edd4baa1a623d58c2f7ba1243))
* 新增 出貨單顯示是否現貨 ([b5d195f](https://bitbucket.org/kr8851com/140404-bearests-api/commit/b5d195f278a6e7b730890f9b5b0f2bf1bbd6a176))
* 新增 列印PDF樣式 ([62bf4bb](https://bitbucket.org/kr8851com/140404-bearests-api/commit/62bf4bb799c25f2ca6389de2be124b758a2a91f6))
* 新增 刪除商品圖片, 刪除商品 增加訊息提示(貨號), 多選情況 若有無法刪除則略過那些貨號, 正常的一樣的可以被刪除 ([6e18ce3](https://bitbucket.org/kr8851com/140404-bearests-api/commit/6e18ce3fb26099f5f9a9e5e157ee7176e8ef50c4))
* 新增 刷入出貨商品, 旁邊要顯示總件數 ([01f3cb9](https://bitbucket.org/kr8851com/140404-bearests-api/commit/01f3cb92d57585a127cd4aa9c5a3356b32a5a060))
* 新增 可控制前台VIP圖片是否顯示 ([9723a99](https://bitbucket.org/kr8851com/140404-bearests-api/commit/9723a9995375ef67436d01e42312d9571df6fc90))
* 新增 各業務模組 ([561f4d0](https://bitbucket.org/kr8851com/140404-bearests-api/commit/561f4d0c28a204fd6ad825ea9245e7626ff1a9e3))
* 新增 商品列表多回傳downloadThumbUrl用來下載用(做reProxy) ([658183f](https://bitbucket.org/kr8851com/140404-bearests-api/commit/658183f5110adcff7cf1ea0f1df9e7ef9a24a8a2))
* 新增 商品管理列表 搜尋功能加入建立時間的日期,有現貨 ([d6f61ca](https://bitbucket.org/kr8851com/140404-bearests-api/commit/d6f61caac4e5f575a5db804079acc310dac6d76d))
* 新增 商品管理重設功能 ([915cc0f](https://bitbucket.org/kr8851com/140404-bearests-api/commit/915cc0f380ff34fc83a7d9daf87959431385280b))
* 新增 尺寸說明管理功能 ([0474690](https://bitbucket.org/kr8851com/140404-bearests-api/commit/047469094ea9b49cc42575f5d77d6102cbf03ea1))
* 新增 工作單並處理關聯問題 ([e82907f](https://bitbucket.org/kr8851com/140404-bearests-api/commit/e82907fb0ab7d90316c42d60bffc4f999f495095))
* 新增 工作單建立功能 ([6d597c0](https://bitbucket.org/kr8851com/140404-bearests-api/commit/6d597c05f64799289776f7e6be92c52e13d95729))
* 新增 店資料 ([1e2d550](https://bitbucket.org/kr8851com/140404-bearests-api/commit/1e2d55022afec93d0d43475bcdb9d58c8ce6d8fd))
* 新增 廠商在新增刪除修改時, 建立快取 ([fef2f89](https://bitbucket.org/kr8851com/140404-bearests-api/commit/fef2f896d6422c08e9f17f891ac51e9a63e4048a))
* 新增 廠商排序功能 ([6312da7](https://bitbucket.org/kr8851com/140404-bearests-api/commit/6312da76aa77369985512c837f502f820977e26e))
* 新增 排成每日晚上12點自動刪除 16小時前的爬蟲資料 ([5d38e65](https://bitbucket.org/kr8851com/140404-bearests-api/commit/5d38e657fe6077d5f592f5de83919bbc8369727d))
* 新增 更新日期查詢 ([56e4d87](https://bitbucket.org/kr8851com/140404-bearests-api/commit/56e4d871cff2b19707a7c7897858ef3e2bc696aa))
* 新增 會員 出貨金額統計 ([0449d67](https://bitbucket.org/kr8851com/140404-bearests-api/commit/0449d670a0f63447b9825601bbe3c8da6c614939))
* 新增 會員交易紀錄查詢可更改項目顯示隱藏 ([8c60df3](https://bitbucket.org/kr8851com/140404-bearests-api/commit/8c60df30af3dbf15b7a40f39cf9d4eef0942e717))
* 新增 會員圖片上傳到 Storage 並使用 uuid 作為權限 ([19f19ae](https://bitbucket.org/kr8851com/140404-bearests-api/commit/19f19ae4d747bf020b0c3bf3edf418bec1db9473))
* 新增 會員資料功能 ([1bf9d76](https://bitbucket.org/kr8851com/140404-bearests-api/commit/1bf9d7688a32d7110b62795cfe3f2d6888e1520a))
* 新增 會員頭像上傳, 檔案上傳增加預覽放大功能 ([120d882](https://bitbucket.org/kr8851com/140404-bearests-api/commit/120d88263133a544e6fb1dd27205a08a4e921422))
* 新增 會員餘額表 ([1572f6b](https://bitbucket.org/kr8851com/140404-bearests-api/commit/1572f6bd90a9d4a3dd28d26545443244170c44e2))
* 新增 權限控制 ([b02812d](https://bitbucket.org/kr8851com/140404-bearests-api/commit/b02812d8efb5731161fa0fa9351103e8bd6616b1))
* 新增 測試資料 ([14041bb](https://bitbucket.org/kr8851com/140404-bearests-api/commit/14041bb9221c218a705b50a27c69169585c77c9f))
* 新增 測試資料 ([a7b5722](https://bitbucket.org/kr8851com/140404-bearests-api/commit/a7b57227e49205fd07201822022e96cec11c5f7e))
* 新增 熱銷商品依照訂單明細更新 ([f54e459](https://bitbucket.org/kr8851com/140404-bearests-api/commit/f54e4591c5c4e1fa08f29acba3f458113c9d1646))
* 新增 登入時取得未讀會員訊息,未讀系統通知 ([05db918](https://bitbucket.org/kr8851com/140404-bearests-api/commit/05db918b4145b29df7d4d21c0ff8bda97a0e48fe))
* 新增 訂單數量檢查 訊息需要提供貨號 ([932fb40](https://bitbucket.org/kr8851com/140404-bearests-api/commit/932fb4052b0ee164d81fc3fd80f10f3d3eea8946))
* 新增 訂單管理, 已向廠商下訂變更按鈕功能 ([7951107](https://bitbucket.org/kr8851com/140404-bearests-api/commit/795110736950d17c808bbbd94b8b9c5ba236bbd7))
* 新增 訂單管理查詢加入訂單內有零元商品查詢 ([9a289a6](https://bitbucket.org/kr8851com/140404-bearests-api/commit/9a289a618ea4814c0c4731708eedf5fadf322ff7))
* 新增 購物車商品, 訂單商品 圖片可控制VIP不顯示 ([84ed3ab](https://bitbucket.org/kr8851com/140404-bearests-api/commit/84ed3ab255577cb8253e575e160d58208fee8fe3))
* 新增 送出訂單若廠商為SINSANG則為003 ([09d9e4a](https://bitbucket.org/kr8851com/140404-bearests-api/commit/09d9e4a1d6bacd23ecaca0137b469a00af59800f))
* 新增 關聯商品可控制VIP圖片是否顯示 ([bf60a01](https://bitbucket.org/kr8851com/140404-bearests-api/commit/bf60a01f94e91ca900ad4122bbe6d115d87d45c7))
* 新增 預先下特新增旗下品牌 ([bd6c26d](https://bitbucket.org/kr8851com/140404-bearests-api/commit/bd6c26dfe730b903acc1356d73c1b9713d002c03))
* 新增 預先下特轉送訂單功能 ([55bee8a](https://bitbucket.org/kr8851com/140404-bearests-api/commit/55bee8a470f43bc44ba6fadc07baef3b8ee556a3))
* 更改 downloadThumbUrl [upload/ 改成 download-upload] ([6380188](https://bitbucket.org/kr8851com/140404-bearests-api/commit/6380188bf94da9555106fdf6f5ea8cb4beb8e796))
* 更改 KR8853爬蟲匯入商品類別多比對 類別/材質 欄位 ([95a8c54](https://bitbucket.org/kr8851com/140404-bearests-api/commit/95a8c545f2e9e3deea36adb9d915af2625b3d0c7))
* 更改 Storage圖片取得機制, 改為可用時效為2分鐘, 每次取圖時新增快取紀錄 ([043f10d](https://bitbucket.org/kr8851com/140404-bearests-api/commit/043f10d4009dbabc7a4badc81818ff9f0ac35a63))
* 更改 今日新品改為今日更新商品即可 ([33f4e94](https://bitbucket.org/kr8851com/140404-bearests-api/commit/33f4e945b94bf011cc5c0eb2df24d8527d2c9ed7))
* 更改 列隊任務KR883, DREAM 排隊分開, 並加上Socket功能 ([cd56936](https://bitbucket.org/kr8851com/140404-bearests-api/commit/cd56936be6dc4cd6299395ae71527ba8366d074a))
* 更改 匯款通知審核 可以更改會員填寫的金額 ([4342d46](https://bitbucket.org/kr8851com/140404-bearests-api/commit/4342d464cab6245ad1a46744664b6fd09b0935b9))
* 更改 取消庫存啟用狀態欄位, 直接依照商品本身的上下架狀態 ([11089ae](https://bitbucket.org/kr8851com/140404-bearests-api/commit/11089aee9129a3d99a9a2dacaba5372b385cf603))
* 更改 各欄位 地址分開, 姓名分開 ([805d6e3](https://bitbucket.org/kr8851com/140404-bearests-api/commit/805d6e3a3c3cbb25b977f57d24ff7eed76af8206))
* 更改 品牌與顏色尺寸更新時自動存成大寫 ([76b3ba8](https://bitbucket.org/kr8851com/140404-bearests-api/commit/76b3ba8e77025889ec7e12a6a888e5e73ec18680))
* 更改 因圖床異動位置, 故更改Yahoo使用的圖片路徑 ([9cccced](https://bitbucket.org/kr8851com/140404-bearests-api/commit/9ccccedc3b6650699cf2c925199494ee749c724b))
* 更改 圖片刪除功能加上判斷(會員無下單過, 無庫存, 無預先下特資料) ([40717f4](https://bitbucket.org/kr8851com/140404-bearests-api/commit/40717f4b01ff6d4fb53c22140b4a7beebba09972))
* 更改 將商品的colorId對應方式改為直接使用字串color ([e8da862](https://bitbucket.org/kr8851com/140404-bearests-api/commit/e8da86291ca8a7b8ad3b49253ea1fbd031a9172a))
* 更改 帳戶待付金額另外提供 ([62f77d9](https://bitbucket.org/kr8851com/140404-bearests-api/commit/62f77d9e41081a02a558b0207fa1cc5368460234))
* 更改 年度季節不管是否已設定, 都依照爬蟲資料更新 ([a2c9619](https://bitbucket.org/kr8851com/140404-bearests-api/commit/a2c96194d6d0a3cd888c2209f77d2d1004a04b09))
* 更改 庫存商品下單後自動為已配貨(其他預設為備貨中) ([d513fc0](https://bitbucket.org/kr8851com/140404-bearests-api/commit/d513fc079f08ecc0ad6d3d64640865a68939a6a3))
* 更改 會員欄位 ([3d1f767](https://bitbucket.org/kr8851com/140404-bearests-api/commit/3d1f7677d7a28b70b1d7f26baa3013565d41f0b1))
* 更改 會員資料與餘額資料欄位調整 ([8874ecb](https://bitbucket.org/kr8851com/140404-bearests-api/commit/8874ecb902033f773b5eb317dfd57d287be61953))
* 更改 特價日期紀錄 不需要管之前不是特價, 只有又更新商品需求並且是 特價狀態, 日期跟著更新 ([1a910ed](https://bitbucket.org/kr8851com/140404-bearests-api/commit/1a910edae083fba4be2e5f3949f56b0407d823ef))
* 更改 登入與左上的金額為扣除待付後的金額 ([d0d0f46](https://bitbucket.org/kr8851com/140404-bearests-api/commit/d0d0f4679b2d34682f1d8d744ddfab09248751c3))
* 更改 網站名稱 bearests ([841c60d](https://bitbucket.org/kr8851com/140404-bearests-api/commit/841c60d5a93feedbca7e9e5ef2421f0baea6fe8f))
* 更改 調整 ([943d965](https://bitbucket.org/kr8851com/140404-bearests-api/commit/943d965ca7af8dfc919ba3d58976e2691eca9e52))
* 更改 調整 Store設定 ([0bb306c](https://bitbucket.org/kr8851com/140404-bearests-api/commit/0bb306cc07ccc8c656d82a25acd4690987453d8b))
* 更改 調整單據欄位 ([0cbfbff](https://bitbucket.org/kr8851com/140404-bearests-api/commit/0cbfbff7737611dfd5fcb6b576ed7eafdbc99706))
* 更改 首頁熱賣商品條件為7天內新增的排名 ([92a2272](https://bitbucket.org/kr8851com/140404-bearests-api/commit/92a22728ffa75bbcecd456b2ddd73a64e387c241))
* 調整 Member, Store ([497573a](https://bitbucket.org/kr8851com/140404-bearests-api/commit/497573a6c96dfef63f0d78fa81e07ffe2a51ef76))
* 關閉 網站設定 ([14fcf48](https://bitbucket.org/kr8851com/140404-bearests-api/commit/14fcf48846004afc848d2f2061e208ee86a5d58e))


### Bug Fixes

* 修正 Dockerfile 被誤改問題 ([cbd6f66](https://bitbucket.org/kr8851com/140404-bearests-api/commit/cbd6f66227f83c3e7db7a7b8f5433f1c01748452))
* 修正 downloadThumbUrl 路徑 ([13e6f9e](https://bitbucket.org/kr8851com/140404-bearests-api/commit/13e6f9e9898b8c95a2a05dc079d306c0144a2289))
* 修正 Mall 刪除 logoMeta 欄位 ([28afaad](https://bitbucket.org/kr8851com/140404-bearests-api/commit/28afaad58b0bef9d236e263306017c99843545f4))
* 修正 product-goods-order-count.entity 加上 createdAt加錯成 profile ([e651dbe](https://bitbucket.org/kr8851com/140404-bearests-api/commit/e651dbe41c909d5608576287576dc8f48cbdab10))
* 修正 SINSANG顏色尺寸翻譯問題 ([eba4071](https://bitbucket.org/kr8851com/140404-bearests-api/commit/eba407140dd696904ed868c57a8b00b7d5fb42a0))
* 修正 下單廠商歸類錯誤 ([f3adfcc](https://bitbucket.org/kr8851com/140404-bearests-api/commit/f3adfcc3574536dc0ce83d567269a5404b9cbc15))
* 修正 最新消息新增資料時做上傳因路徑設定錯誤導致會出現錯誤無法上傳 ([ba28246](https://bitbucket.org/kr8851com/140404-bearests-api/commit/ba28246a55f04a1f8aafd86708bd0250e104f289))
* 修正 最新消息無顯示描述導致無法編輯 ([ef64fdf](https://bitbucket.org/kr8851com/140404-bearests-api/commit/ef64fdf990fb101be890ff069f6174c55cf592ec))
* 修正 出貨單商品明細 新增 profile識別欄位(因不使用orm方式, 故沒有 factoryModel 導致整個 profile為空 ([6101e51](https://bitbucket.org/kr8851com/140404-bearests-api/commit/6101e51fea2e137247a306a565b410cd4a6cb96a))
* 修正 出貨單明細資訊 因Typeorm未Select備註欄位導致 缺少取出備註送出 ([f99ca39](https://bitbucket.org/kr8851com/140404-bearests-api/commit/f99ca393e46879fb316597c64e985bd941666b02))
* 修正 出貨管理 尚有待付款查詢功能失效 ([91ff4ae](https://bitbucket.org/kr8851com/140404-bearests-api/commit/91ff4ae60e8a5bc1e5761d67062593051e5bd198))
* 修正 刪除Meta相關欄位造成的錯誤,因以替換成path ([7d11e9f](https://bitbucket.org/kr8851com/140404-bearests-api/commit/7d11e9fcc19843aca0409268391417bdc2123563))
* 修正 刪除任務判斷是否任務還存在 ([adf845b](https://bitbucket.org/kr8851com/140404-bearests-api/commit/adf845ba48e0ce06c9a7350780e63731445346a8))
* 修正 前台預先下特下訂與不顯示判斷錯誤的問題 ([fe5c6e2](https://bitbucket.org/kr8851com/140404-bearests-api/commit/fe5c6e225fe0c10019a070df7ffbcd902ef83ca5))
* 修正 區塊廣告未帶版本導致圖片快取 ([2dc1458](https://bitbucket.org/kr8851com/140404-bearests-api/commit/2dc14585ebc371b0e4f634d8ea1d64e7fa8d046e))
* 修正 商品明細頁顯示VIP圖片判定錯誤 ([15ea433](https://bitbucket.org/kr8851com/140404-bearests-api/commit/15ea433c2ae329ca32bb811858068aeea676b5f0))
* 修正 商品管理 尺寸同步開關 未做更新 ([21f9028](https://bitbucket.org/kr8851com/140404-bearests-api/commit/21f9028eb962e3379cd961311553e28d9bf51339))
* 修正 商品進貨廠商管理功能 ([0be0538](https://bitbucket.org/kr8851com/140404-bearests-api/commit/0be0538278630b9a25037efb0bbf71a489daba14))
* 修正 因改捕夢圖床已將 商品thumbMeta改為thumbPath, 故取用查詢欄位移除 ([41c3f81](https://bitbucket.org/kr8851com/140404-bearests-api/commit/41c3f81aae01574847ad0a971a33522506065fe8))
* 修正 圖片因使用CF雲會快取,故若有上傳圖片, 則需要圖片版本 ([1abec57](https://bitbucket.org/kr8851com/140404-bearests-api/commit/1abec57caacb8869de1daf4489691c6b9f3bd2ef))
* 修正 增加檢查判斷沒有 mergeName 的時候, 不進行檢查(因使用null查詢redis導致錯誤) ([4251e6e](https://bitbucket.org/kr8851com/140404-bearests-api/commit/4251e6e3ffe008847c90631fe27e0007f0035fcb))
* 修正 外部匯入類別同步設定被預設覆蓋問題 ([4d10d46](https://bitbucket.org/kr8851com/140404-bearests-api/commit/4d10d464cf7587db7d71536b5f9dfc4778130953))
* 修正 尺寸說明圖片路徑設定錯誤 ([1044fcd](https://bitbucket.org/kr8851com/140404-bearests-api/commit/1044fcde2417bd91c4c61fdf6eec51225d6287ec))
* 修正 尺寸說明欄位取用錯誤 ([4128f5a](https://bitbucket.org/kr8851com/140404-bearests-api/commit/4128f5ad835b7fe3d30cd0c585916096576f1176))
* 修正 已達出貨人數算錯 ([9a5521d](https://bitbucket.org/kr8851com/140404-bearests-api/commit/9a5521dd4cdf9bbe030ac2e3e148d5d9acea2d34))
* 修正 已達出貨標準的人數取得錯誤 ([930d5b8](https://bitbucket.org/kr8851com/140404-bearests-api/commit/930d5b8b01497f8f1d08d8848737c09ae8bf2bee))
* 修正 庫存管理, 未刪除顏色表關聯 ([ad3f849](https://bitbucket.org/kr8851com/140404-bearests-api/commit/ad3f849019a325f37439fafce4de58c5c63d8c83))
* 修正 庫存管理後台無法使用更新日期排序 ([e384331](https://bitbucket.org/kr8851com/140404-bearests-api/commit/e384331a678dce224b43b8909abdb43f3a8aae06))
* 修正 廠商歸類判別 ([449a386](https://bitbucket.org/kr8851com/140404-bearests-api/commit/449a3867fec3f336e55a89fa27910a4f79cfdedf))
* 修正 建立日期查詢開始與結束需帶入時分秒 ([cde8996](https://bitbucket.org/kr8851com/140404-bearests-api/commit/cde8996aab187ed3c35e149841c51fcb2d64b862))
* 修正 手動新增商品時的 允許同步顏色設定吃到允許品牌設定, 允許特價設定吃到允許售價設定 ([54f08eb](https://bitbucket.org/kr8851com/140404-bearests-api/commit/54f08ebfd8d19af0b1191ebfdef334e61c91555d))
* 修正 斷貨結果匯入接口路徑刪除,找回 ([9a7f488](https://bitbucket.org/kr8851com/140404-bearests-api/commit/9a7f488826a1c4b7601efa6ecce1f522d7a6d09e))
* 修正 更新已完成訂單狀態 未判斷到備貨商品狀態為售完取消 ([449ea42](https://bitbucket.org/kr8851com/140404-bearests-api/commit/449ea424a2aef58b6446d3e4f285cfda47b17e29))
* 修正 材質空白無法清除儲存 ([314a52a](https://bitbucket.org/kr8851com/140404-bearests-api/commit/314a52af12096f6cfdef0d29d922465259249366))
* 修正 查詢條件覆蓋問題 ([3487159](https://bitbucket.org/kr8851com/140404-bearests-api/commit/348715985704fa8a8567fa14e8c1f8ecc86c1ced))
* 修正 爬蟲匯入再更新商品情況時, 因判斷舊圖床Meta欄位導致不更新圖片 ([8adcb4f](https://bitbucket.org/kr8851com/140404-bearests-api/commit/8adcb4f2dd205250c9211ddea0425b5f3aeda4a1))
* 修正 爬蟲匯入列表更新時間 ([1f60701](https://bitbucket.org/kr8851com/140404-bearests-api/commit/1f60701f977e839eaa49f52b09628ea21abb380a))
* 修正 爬蟲匯入取得Color Name 不需要轉Number ([adc6715](https://bitbucket.org/kr8851com/140404-bearests-api/commit/adc6715904b660acf22f8349c77cceb4f09c15c7))
* 修正 爬蟲匯入特價判斷當與上次價錢低於85折, 但新價錢進入時, 當前價錢等於上次價錢, 但價錢相同導致判定邏輯有問題 ([21ed993](https://bitbucket.org/kr8851com/140404-bearests-api/commit/21ed9932fd6345e7f42a7e882d6a4107ad54255c))
* 修正 編輯廠商排序未傳 sort欄位 ([77c85cc](https://bitbucket.org/kr8851com/140404-bearests-api/commit/77c85ccf6186a54a37fcf92b5eb7bd896e03940a))
* 修正 編輯廠商排序未傳 sort欄位 ([7f9aee7](https://bitbucket.org/kr8851com/140404-bearests-api/commit/7f9aee71b0a8f6dc65f745dab80736e36acc1ba0))
* 修正 訂單管理的查詢條件, 0元商品, 廠訂 ([3e18ab6](https://bitbucket.org/kr8851com/140404-bearests-api/commit/3e18ab61682b4fb5617e1a304b117490ff199111))
* 修正 購物說明少傳content欄位導致錯誤 ([a377241](https://bitbucket.org/kr8851com/140404-bearests-api/commit/a37724129bcfa1a2e0209bb12d11cb9fa7aaa4a5))
* 修正 首頁熱賣商品應依照熱賣程度排序 ([0a252e0](https://bitbucket.org/kr8851com/140404-bearests-api/commit/0a252e08d4b7c0e3eb8cc5d1080d5ec3c234450e))
* 優化 各快取資料存入時, 清除左右空白 ([be982a9](https://bitbucket.org/kr8851com/140404-bearests-api/commit/be982a9dea4ca6c47d1b460567820d48ac2edc2e))
