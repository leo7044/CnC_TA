// ==UserScript==
// @name		SubSender
// @version		2024.06.13
// @author		leo7044
// @homepage		https://rapidly-decent-spider.ngrok-free.app/leoGameStats/
// @downloadURL		https://github.com/leo7044/CnC_TA/raw/master/SubSender.user.js
// @updateURL		https://github.com/leo7044/CnC_TA/raw/master/SubSender.user.js
// @description		Uvs automatisch raussenden
// @include		http*://cncapp*.alliances.commandandconquer.com/*/index.aspx*
// @icon		data:image/png;base64,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
// @grant		none
// ==/UserScript==

(function () {
	var SubSenderMain = function ()
	{
		function SubSenderCreate()
		{
			try
			{
				var PlayerId = ClientLib.Data.MainData.GetInstance().get_Player().get_Id();
				if (PlayerId > 0)
				{
					var InstanceId = ClientLib.Net.CommunicationManager.GetInstance().get_InstanceId();
					var HostId = document.URL.split('/')[2].split('.')[0].substr(-2);
					var WorldId = ClientLib.Data.MainData.GetInstance().get_Server().get_WorldId();
					var AllianceId = ClientLib.Data.MainData.GetInstance().get_Alliance().get_Id();
					var DataSub = {};
					if (WorldId == 451 && AllianceId == 102) // Tib63, Obdachlose
					{
						DataSub = {name: "AffenKoenig", session: InstanceId};
					}
					if (Object.keys(DataSub).length)
					{
						if (ClientLib.Data.MainData.GetInstance().get_PlayerSubstitution().getOutgoing())
						{
							if (ClientLib.Data.MainData.GetInstance().get_PlayerSubstitution().getOutgoing().n != DataSub.name)
							{
								var SubCancelId = ClientLib.Data.MainData.GetInstance().get_PlayerSubstitution().getOutgoing().i;
								var SubCancelPid = ClientLib.Data.MainData.GetInstance().get_PlayerSubstitution().getOutgoing().p1;
								var SubName = ClientLib.Data.MainData.GetInstance().get_PlayerSubstitution().getOutgoing().n;
								var DataSubCancel = {id: SubCancelId, pid: SubCancelPid, session: InstanceId};
								ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("SubstitutionCancelReq", DataSubCancel, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, function(){console.log('Sub revoked from ' + SubName);}), null);
							}
						}
						ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("SubstitutionCreateReq", DataSub, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, function(){console.log('Sub sent to ' + DataSub.name);}), null);
					}
				}
				else
				{
					setTimeout(SubSenderCreate, 1000);
				}
			}
			catch(e)
			{
				console.log(e);
			}
		}
		function LoadExtension()
		{
			try
			{
				if (typeof(qx)!='undefined')
				{
					if (!!qx.core.Init.getApplication().getMenuBar())
					{
						SubSenderCreate();
						return;
					}
				}
			}
			catch (e)
			{
				if (console !== undefined) console.log(e);
				else if (window.opera) opera.postError(e);
				else GM_log(e);
			}
			window.setTimeout(LoadExtension, 1000);
		}
		LoadExtension();
	};
	function Inject()
	{
		if (window.location.pathname != ("/login/auth"))
		{
			var Script = document.createElement("script");
			Script.innerHTML = "(" + SubSenderMain.toString() + ")();";
			Script.type = "text/javascript";
			document.getElementsByTagName("head")[0].appendChild(Script);
		}
	}
	Inject();
})();
